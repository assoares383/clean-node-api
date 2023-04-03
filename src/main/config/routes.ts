import { Express, Router } from 'express';
import fg from 'fast-glob';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);

  // eslint-disable-next-line arrow-parens
  fg.sync('**/src/main/routes/**routes.ts').map(
    // eslint-disable-next-line arrow-parens
    async file => (await import(`../../../${file}`)).default(router),
    // eslint-disable-next-line function-paren-newline
  );
};
