import path from 'path';
import fs from 'fs';
import { IMAGE_EXT, readConfig, VIDEO_EXT } from '../config';

readConfig();
const STORAGE_PATH = process.env.STORAGE_PATH as string;

let instance: FileService;

class FileService {
  constructor() {
    if (instance) return instance;
    instance = this;
  }

  /**
   * Storage 경로를 반환한다.
   */
  getStoragePath = () => STORAGE_PATH || '';

  /**
   * 입력받은 디렉토리의 경로 내부의 파일 시스템 구조를 가지고 온다.
   * @param basedir 디렉토리 경로
   * @returns [[모든 디렉토리 경로, ...], [모든 파일 경로, ...]]
   */
  dirWalk = (basedir: string): string[][] => {
    if (!fs.existsSync(basedir)) return [[], []];

    const files = fs.readdirSync(basedir);
    return files.reduce(
      (acc: string[][], file: string) => {
        if (file.startsWith('.')) return acc;
        const filePath = path.join(basedir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          const [ds, fs] = this.dirWalk(filePath);
          return [
            [...acc[0], ...ds],
            [...acc[1], ...fs],
          ];
        } else if (stat.isFile() || stat.isSymbolicLink()) {
          return [[...acc[0]], [...acc[1], filePath]];
        }
        return acc;
      },
      [[basedir], []]
    );
  };

  /**
   * STORAGE_PATH 를 없앤 경로를 반환한다.
   * @param file 파일 경로
   * @returns prefix 가 제거된 파일 경로
   */
  removePrefixPath = (file: string) => file.replace(STORAGE_PATH, '');

  /**
   * 입력받은 경로 내부의 prefix 가 제거된 파일 시스템 구조를 가지고 온다.
   * @param dir 디렉토리 경로
   * @returns [[prefix 가 제거된 모든 디렉토리 경로, ...], [prefix 가 제거된 모든 파일 경로, ...]]
   */
  readFiles = (dir: string = '/') => {
    const [ds, fs] = this.dirWalk(path.join(STORAGE_PATH, dir));
    return [ds, fs].map((df) => df.map(this.removePrefixPath).filter((i) => !!i));
  };

  /**
   * 이미지 파일인 경우 true 를 반환. 반대로 이미지 파일이 아닌 경우, false 를 반환
   * @param filePath 검사할 파일 경로
   * @returns 이미지 파일인 경우 true, 아닌 경우 false
   */
  isImage = (filePath: string) => {
    const ss = filePath.split('.');
    const ext = ss[ss.length - 1];
    return IMAGE_EXT.includes(ext);
  };

  /**
   * 입력받은 디렉토리 내부의 모든 image 경로를 가지고 온다.
   * @param dir
   * @returns [모든 이미지 경로]
   */
  readImages = (dir: string = '/') => {
    const [, fs] = this.readFiles(dir);
    return fs.filter(this.isImage);
  };

  /**
   * 비디오 파일인 경우 true 를 반환. 반대로 비디오 파일이 아닌 경우, false 를 반환
   * @param filePath 검사할 파일 경로
   * @returns 비디오 파일인 경우 true, 아닌 경우 false
   */
  isVideo = (filePath: string) => {
    const ss = filePath.split('.');
    const ext = ss[ss.length - 1];
    return VIDEO_EXT.includes(ext);
  };

  /**
   * 입력받은 디렉토리 내부의 모든 video 경로를 가지고 온다.
   * @param dir
   * @returns [모든 이미지 경로]
   */
  readVideos = (dir: string = '/') => {
    const [, fs] = this.readFiles(dir);
    return fs.filter(this.isVideo);
  };
}

export default FileService;
