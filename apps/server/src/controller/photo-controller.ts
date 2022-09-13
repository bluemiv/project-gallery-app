import { ControllerType } from '../types';
import { parsePath } from '../utils';
import { FileService } from '../service';

const prefix = '/photo';
const getPath = parsePath(prefix);

const fileService = new FileService();

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      const { dir } = req?.query;
      const fs = fileService.readImages(dir);
      return res.json({
        results: fs,
      });
    },
  ],
];

const photoController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default photoController;
