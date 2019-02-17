import User from '../models/user.model';

const list = (req, res, next) => {
  User.find((err, users) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    res.json(users);
  })
  .select('PERSONAL_DATA, COMPANY_DATA.ROLE');
}

const create = (req, res, next) => {
  const user = new User(req.body);
  //return res.status(200).json(user);
  user.save((err, result) => {
    if(err) {
      return res.status(400).json({
        error: 'Server error: ' + err
      });
    }
    return res.status(200).json({
      message: 'User created succesfully'
    });
  });
}

export default { list, create }
