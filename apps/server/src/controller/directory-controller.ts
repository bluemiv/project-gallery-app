import { ControllerType } from '../types';
import { parsePath } from '../utils';
import { FileService } from '../service';

const prefix = '/directory';
const getPath = parsePath(prefix);

const service = new FileService();

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      const [ds, _] = service.readFiles();
      return res.json({
        results: ds,
      });
    },
  ],
];

const directoryController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default directoryController;
