import { ControllerType } from '../types';
import { parsePath } from '../utils';

const prefix = '/photo';
const getPath = parsePath(prefix);

const get: ControllerType = [
  [
    getPath('/'),
    (req, res) => {
      res.send('hello');
    },
  ],
];

const photoController: {
  [key: string]: ControllerType;
} = {
  get,
};

export default photoController;
