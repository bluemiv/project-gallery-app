import { ControllerType } from '../types';
import { parsePath } from '../utils';
import { FileService } from '../service';

const prefix = '/file';
const getPath = parsePath(prefix);

const service = new FileService();

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      const path = req?.query?.path ?? '/';
      const [ds, fs] = service.getFileList(path);
      return res.json({
        counts: ds.length + fs.length,
        results: {
          directory: ds,
          file: fs,
        },
      });
    },
  ],
];

const fileController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default fileController;
