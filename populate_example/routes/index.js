import areas from './areas';
import users from './users';

const routes = (router) => {
  areas(router);
  users(router);
  return router;
}

export default routes;
