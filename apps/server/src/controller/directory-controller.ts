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
        count: ds?.length ?? 0,
        results: ds || [],
      });
    },
  ],
  [
    getPath('/config'),
    (req, res) => {
      return res.json({
        results: service.getStoragePath(),
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
