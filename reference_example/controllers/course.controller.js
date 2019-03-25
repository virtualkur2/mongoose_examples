import Course from '../models/course.model';

const list = (req, res, next) => {
  Course.find((err, courses) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err.message
      });
    }
    res.json(courses);
  })
  .populate('profesor', 'nombre apel1 apel2');
}

const read = (req, res, next) => {
  return res.status(200).json(req.profile);
}

const create = (req, res, next) => {
  const course = new Course(req.body);
  course.save((err, result) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err.message
      });
    }
    return res.status(200).json({
      message: 'Course created succesfully',
      result: result
    });
  });
}

const update = (req, res, next) => {
  let course = req.profile;
  course.save((err) => {
    if(err) {
      return res.status(400).json({
        message: 'Server error: ' + err.message
      });
    }
    res.status(200).json({
      message: 'Course successfully updated',
      result: course
    });
  });
}

const courseByID = (req, res, next, id) => {
  Course.findById(id).exec((err, course) => {
    if(err) {
      return res.status(400).json({
        message: 'Server error: ' + err.messsage
      });
    }
    if(!course) {
      return res.status(404).json({
        error: 'Course not found'
      });
    }
    req.profile = course;
    next();
  });
}

export default {list, read, create, update, courseByID}
