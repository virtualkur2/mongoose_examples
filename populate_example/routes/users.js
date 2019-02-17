import usrCtrl from '../controllers/user.controller';

const users = (router) => {
  router.route('/api/users')
    .get(usrCtrl.list)
    .post(usrCtrl.create);
}

export default users;
