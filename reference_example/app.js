import server from './server';
import connection from './db-helper';
import config from './config';

const app = server();
console.info('Starting application...');
connection()
  .then(() => {
    console.info('===> Starting server...');
    app.listen(config.port, (err) => {
      if (err) {
        console.log(err.message);
        process.exit(1);
      }
      console.info(`===> Server succesfully started and listening on port: ${config.port}.`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    console.log('Application can\'t be started.');
    process.exit(1);
  });

process.on('SIGINT', () => {
  console.info('Bye.');
});
