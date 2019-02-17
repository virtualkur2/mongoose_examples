const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/populate',
  //dbUser: process.env.DB_USER || 'dev_usr-2018',
  //dbPassword: process.env.DB_PASSWORD || 'dev@2018',
}

export default config;
