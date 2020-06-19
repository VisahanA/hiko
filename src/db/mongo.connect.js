const mongoose = require('mongoose');
const config = require('../config/config');
const logger = require('../utils/logger');

const connectToDb = async () => {
  try {
    await mongoose.connect(config.DATABASE.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    logger.info("🔌🔌🔌 Connected to MongoDB!!!");
  } catch (err) {
    logger.error(`✋✋✋🛑🛑🛑 Could not connect to MongoDB. ${err} 🛑🛑🛑✋✋✋`);
    process.exit(1);
  }
};

module.exports = connectToDb;
