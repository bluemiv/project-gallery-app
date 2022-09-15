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

const isImage = (filename: string) => {
  const filenameList = filename.toLowerCase().split('.');
  const ext = filenameList[filenameList.length - 1];
  return IMAGE_EXT.includes(ext);
};

const fileService = {
  isImage,
};

export default fileService;
