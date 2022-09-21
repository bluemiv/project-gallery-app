import { ControllerType } from '../types';
import { parsePath } from '../utils';
import getDataSource from '../database/data-source';
import { Config } from '../entity/config';

const prefix = '/config';
const getPath = parsePath(prefix);

const get: ControllerType = [
  [
    getPath('/storage-path'),
    async (req, res) => {
      const configRepository = getDataSource().getRepository(Config);
      const findConfig = await configRepository.findOneBy({ key: 'storagePath' });
      return res.json({ storagePath: findConfig?.value ?? '' });
    },
  ],
];

const post: ControllerType = [
  [
    getPath('/storage-path'),
    async (req, res, next) => {
      const storagePath = req?.body?.storagePath;
      if (!storagePath) {
        return next([400, new Error('Required storage path.')]);
      }
      const configRepository = getDataSource().getRepository(Config);

      const findConfig = await configRepository.findOneBy({ key: 'storagePath' });
      if (findConfig) {
        await configRepository.update({ key: findConfig.key }, { value: storagePath });
        return res.json({ storagePath: storagePath });
      }

      const config = new Config();
      config.key = 'storagePath';
      config.value = storagePath;
      const saveConfig = await configRepository.save(config);
      return res.json({ storagePath: saveConfig.value });
    },
  ],
];

const configController: {
  [key: string]: ControllerType;
} = {
  get,
  post,
};

export default configController;
