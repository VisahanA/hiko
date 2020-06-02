const express = require('express')
const next = require('next')
const cors = require('cors')
const helmet = require('helmet')

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

  expressApp.all('*', (req, res) => {
    return handle(req, res)
  })

  expressApp.listen(port, (err) => {
    if (err) throw err
    console.log(` Ready on http://localhost:${port}`)
  })
}

module.exports = start;
