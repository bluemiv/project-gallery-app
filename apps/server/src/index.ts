import express from 'express';
import cors, { CorsOptions } from 'cors';
import { configController, fileController, videoController } from './controller';
import { readConfig } from './config';

const whitelist = ['http://localhost:3000', undefined];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const startServer = async () => {
  await readConfig();

  const { SERVER_PORT, STORAGE_PATH } = process.env;
  const server = express();

  server.use(cors(corsOptions));
  server.use('/', express.static(STORAGE_PATH as string));

  fileController['get'].map((c) => server.get(...c));
  configController['get'].map((c) => server.get(...c));
  videoController['get'].map((c) => server.get(...c));

  server.listen(SERVER_PORT, () => {
    console.log(`Start server http://localhost:${SERVER_PORT}`);
  });
};

startServer();
