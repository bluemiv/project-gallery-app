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

const getFileExtension = (filename: string) => {
  const filenameList = filename.toLowerCase().split('.');
  if (filenameList.length === 0) return '';
  return filenameList[filenameList.length - 1];
};

const isImage = (filename: string) => IMAGE_EXT.includes(getFileExtension(filename));

const isVideo = (filename: string) => VIDEO_EXT.includes(getFileExtension(filename));

const fileService = {
  getFileExtension,
  isImage,
  isVideo,
};

export default fileService;
