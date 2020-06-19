const express = require('express')
const next = require('next')
const cors = require('cors')
const helmet = require('helmet')
const cookiesMiddleware = require('universal-cookie-express');
const logger = require('./utils/logger')
const v1Routes = require('./routes/v1/v1.routes');

const port = process.env.SERVER_PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: './src' })
const handle = nextApp.getRequestHandler()

const start = async () => {
  await nextApp.prepare();
  const expressApp = express()
  expressApp.use(cors());
  expressApp.use(express.json());
  expressApp.use(helmet());
  expressApp.use(cookiesMiddleware());
  expressApp.use('/api/v1', v1Routes);
  expressApp.use((err, req, res, _) => {
    // Converting default HTML error to JSON
    res.status(500).send({ error: err.message });
  });

  expressApp.all('*', (req, res) => {
    return handle(req, res)
  })

  expressApp.listen(port, (err) => {
    if (err) throw err
    logger.info(` Ready on http://localhost:${port}`)
  })
}

module.exports = start;
