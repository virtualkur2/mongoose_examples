import areaCtrl from '../controllers/area.controller';

const areas = (router) => {

  router.route('/api/areas/byid/:areaId')
    .get(areaCtrl.read)
    .put(areaCtrl.update);

  router.route('/api/areas')
    .get(areaCtrl.list)
    .post(areaCtrl.create);

  router.route('/api/areas/:from')
    .get(areaCtrl.listFrom);

  router.param('areaId', areaCtrl.areaByID);
}

export default areas;
