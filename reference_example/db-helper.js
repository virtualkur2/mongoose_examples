import mongoose from 'mongoose';
import config from './config';

const connection = () => {
  console.info('===> Trying to connect to Database...');
  return new Promise((resolve) => {
    const uri = config.mongoUri;
    const options = {
      user: config.env !== 'development' ? config.dbUser : undefined,
      pass: config.env !== 'development' ? config.dbPassword : undefined,
      useNewUrlParser: true,
      useCreateIndex: true,
      ssl: config.env !== 'development' ? true : false,
      connectTimeoutMS: 3000,
    }
    mongoose.connect(uri, options)
      .then(() => {
        console.info('===> Succesfully connected to Database.');
        resolve();
      })
      .catch((err) => {
        console.error(`===> Error connecting to DB: ${err.message}.\n===> Exiting...`);
        process.exit(1);
      });
  });

}

export default connection;
