import InnerGalleryButton, { GalleryButtonProps } from './GalleryButton';
import Group from './Group';
import Directory from './Directory';

type InnerGalleryButtonType = typeof InnerGalleryButton;

interface GalleryButtonInterface extends InnerGalleryButtonType {
  Group: typeof Group;
  Directory: typeof Directory;
}

const GalleryButton = InnerGalleryButton as GalleryButtonInterface;
GalleryButton.Group = Group;
GalleryButton.Directory = Directory;

export type { GalleryButtonProps };

export default GalleryButton;
