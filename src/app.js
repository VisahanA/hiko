require('dotenv').config();
const logger = require('./utils/logger');
const connectMongo = require('./db/mongo.connect');
const startServer = require('./server');

connectMongo()
  .then(startServer)
  .catch((error) => {
    logger.error(error);
  })
