const logger = require('pino')({
  prettyPrint: {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
  }
})

module.exports = logger;
