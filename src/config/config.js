const config = {
  DATABASE: {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/hiko'
  },
  JWT_SECRET: process.env.JWT_SECRET || 'thisIsMySecret'
};

module.exports = config;
