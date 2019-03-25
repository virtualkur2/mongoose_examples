import courseCtrl from '../controllers/course.controller';

const courses = (router) => {
  router.route('/api/courses/byid/:courseId')
    .get(courseCtrl.read)
    .put(courseCtrl.update);

  router.route('/api/courses')
    .get(courseCtrl.list)
    .post(courseCtrl.create);

  router.param('courseId', courseCtrl.courseByID);
}

export default courses;
