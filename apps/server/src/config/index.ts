import path from 'path';
import dotenv from 'dotenv';

export const IMAGE_EXT = [
  'jpg',
  'jpeg',
  'jfif',
  'exif',
  'tif',
  'tiff',
  'png',
  'gif',
  'bmp',
  'rle',
  'dib',
  'ppm',
  'pgm',
  'pbm',
  'pnm',
  'bpg',
  'heif',
  'raw',
  'iso',
  'svg',
  'webp',
];

export const VIDEO_EXT = [
  'mp4',
  'm4v',
  'mov',
  'wmv',
  'mwa',
  'asf',
  'avi',
  'avchd',
  'flv',
  'f4v',
  'swf',
  'mkv',
  'mpg',
  'mpeg',
  '3gp',
  '3g2',
  'webm',
];

export const readConfig = () => {
  const envPath = path.join(__dirname, `../../.env.${process.env.ENV}`);
  return dotenv.config({ path: envPath, encoding: 'utf-8' });
};
