import { ControllerType } from '../types';
import { parsePath } from '../utils';
import { FileService } from '../service';

const prefix = '/config';
const getPath = parsePath(prefix);

const fileService = new FileService();

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      return res.json({
        results: fileService.getStoragePath(),
      });
    },
  ],
];

const configController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default configController;
