import express from 'express';
import consoleStamp from 'console-stamp';

import routes from './routes/';

const router = express.Router();

consoleStamp(console, "HH:MM:ss.l");

const server = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(routes(router));
  return app;
}

export default server;
