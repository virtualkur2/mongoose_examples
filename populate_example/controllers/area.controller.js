import Area from '../models/area.model';

const list = (req, res, next) => {
  Area.find((err, areas) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    res.json(areas);
  })
  .populate('user', 'NAME LASTNAME');
}

const read = (req, res, next) => {
  return res.status(200).json(req.profile);
}

const create = (req, res, next) => {
  const area = new Area(req.body);
  //return res.status(200).json(area);
  area.save((err, result) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    return res.status(200).json({
      message: 'Area created succesfully'
    });
  });
}

const update = (req, res, next) => {
  let area = req.profile;
  const backlog = req.body;
  area.MODIFY_BACKLOG.push(backlog);
  area.save((err) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    res.status(200).json(area);
  });
}

const listFrom = (req, res, next) => {
  const from = parseInt(req.params.from);
  const populateAddedBy = {
    path: 'ADDED_BY',
    select: 'PERSONAL_DATA.NAME PERSONAL_DATA.LASTNAME'
  }

  const populateBackLog = {
    path: 'MODIFY_BACKLOG.USER',
    select: 'PERSONAL_DATA.NAME PERSONAL_DATA.LASTNAME'
  }

  Area.find()
    .sort('NAME')
    .populate(populateAddedBy)
    .populate(populateBackLog)
    .limit(10)
    .skip(from)
    .exec((err, areas) => {
      if(err) {
        return res.status(400).json({
          error: 'Server error: ' + err
        });
      }
      Area.countDocuments({}, (err, total) => {
        return res.status(200).json({
          success: true,
          areas,
          total
        });
      });
    });
}

const areaByID = (req, res, next, id) => {
  Area.findById(id).exec((err, area) => {
    if (err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    if (!area) {
      return res.status(400).json({
        error: 'Area not found: ' + err
      });
    }
    req.profile = area;
    next();
  });
}

export default {list, read, create, update, listFrom, areaByID}
