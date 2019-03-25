import teachers from './teachers';
import courses from './courses';

const routes = (router) => {
  teachers(router);
  courses(router);
  return router;
}
export default routes;
