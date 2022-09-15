import Group, { GalleryDataSourceType } from './Group';
import Directory from './Directory';
import Image from './Image';
import type { ImageProps } from './Image/Image';
import type { DirectoryProps } from './Directory/Directory';

interface GalleryButtonInterface {
  Group: typeof Group;
  Directory: typeof Directory;
  Image: typeof Image;
}

const GalleryButton = { Group, Directory, Image } as GalleryButtonInterface;

export type { ImageProps, DirectoryProps, GalleryDataSourceType };

export default GalleryButton;
