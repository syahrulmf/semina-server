const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.JWT_EXPIRATION,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshTokenExpiration: process.env.JWT_EXPIRATION_REFRESH_TOKEN,
  jwtRefreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
