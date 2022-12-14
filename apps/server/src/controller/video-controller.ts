import { ControllerType } from '../types';
import { parsePath } from '../utils';
import { FileService } from '../service';

const prefix = '/video';
const getPath = parsePath(prefix);

const fileService = new FileService();

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      const { dir } = req?.query;
      return res.json({
        results: [],
      });
    },
  ],
];

const videoController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default videoController;
