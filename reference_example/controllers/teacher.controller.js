import Teacher from '../models/teacher.model';

const list = (req, res, next) => {
  Teacher.find((err, teachers) => {
    if(err) {
      return res.status(400).json({
        err: 'Server error: ' + err.message
      });
    }
    res.json(teachers);
  });
}

const create = (req, res, next) => {
  const teacher = new Teacher(req.body);
  teacher.save((err, result) => {
    if(err) {
      return res.status(400).json({
        err: 'Server error: ' + err.message
      });
    }
    return res.status(200).json({
      message: 'Teacher created succesfully',
      result: result
    });
  });
}

export default { list, create }
