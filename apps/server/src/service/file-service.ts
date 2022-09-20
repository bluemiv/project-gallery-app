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
   * 입력받은 경로의 모든 파일 조회한다. (depth = 1)
   * @param initPath 초기 입력받은 파일 경로
   * @returns [[directories][files]]
   */
  getFileList = (initPath: string = '/'): string[][] => {
    const fullPath = path.join(this.getStoragePath(), initPath);
    console.log(fullPath);
    const init = [[], []];
    if (!fs.existsSync(fullPath)) return init;

    const files = fs.readdirSync(fullPath);
    return files
      .reduce((acc: string[][], file: string) => {
        if (file.startsWith('.')) return acc;

        const filePath = path.join(fullPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          return [[...acc[0], file], acc[1]];
        } else if (stat.isFile() || stat.isSymbolicLink()) {
          return [acc[0], [...acc[1], file]];
        }
        return acc;
      }, init)
      .map((df) => df.filter((i) => !!i));
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
   * 비디오 파일인 경우 true 를 반환. 반대로 비디오 파일이 아닌 경우, false 를 반환
   * @param filePath 검사할 파일 경로
   * @returns 비디오 파일인 경우 true, 아닌 경우 false
   */
  isVideo = (filePath: string) => {
    const ss = filePath.split('.');
    const ext = ss[ss.length - 1];
    return VIDEO_EXT.includes(ext);
  };
}

export default FileService;
