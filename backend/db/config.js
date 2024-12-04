require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  dbURI: process.env.DB_URI || "mongodb://localhost:27017/movierecommendation",
  jwtSecret: process.env.JWT_SECRET || "supersecretkey",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
};

module.exports = config;
