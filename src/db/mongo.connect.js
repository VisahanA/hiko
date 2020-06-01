const mongoose = require('mongoose');
const constants = require('../utils/constants');
const logger = require('../utils/logger');

const connectToDb = async () => {
  try {
    await mongoose.connect(constants.DATABASE.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info("🔌🔌🔌 Connected to MongoDB!!!");
  } catch (err) {
    logger.error(`✋✋✋🛑🛑🛑 Could not connect to MongoDB. ${err} 🛑🛑🛑✋✋✋`);
    process.exit(1);
  }
};

module.exports = connectToDb;
