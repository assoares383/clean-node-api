/* eslint-disable arrow-parens */
import * as fs from 'fs';
import * as express from 'express';

export default (app: express.Express): void => {
  const router = express.Router();
  app.use('/api', router);

  // eslint-disable-next-line no-console
  fs.readdirSync(`${__dirname}/../routes`).map(async file => {
    if (file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
