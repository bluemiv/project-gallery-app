import express from 'express';
import photoController from './controllers/photo-controller';

const server = express();
const port = 3000;

photoController['get'].map((c) => server.get(...c));

server.listen(port, () => {
  console.log(`Start server http://localhost:3000`);
});
