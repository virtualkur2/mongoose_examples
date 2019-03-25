import teacherCtrl from '../controllers/teacher.controller';

const teachers = (router) => {
  router.route('/api/teachers/byid/:teacherId')
    .get(teacherCtrl.read)
    .put(teacherCtrl.update);

  router.route('/api/teachers')
    .get(teacherCtrl.list)
    .post(teacherCtrl.create);

  router.param('teacherId', teacherCtrl.teacherById);
}

export default teachers;
