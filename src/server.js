const express = require('express')
const next = require('next')

const port = process.env.SERVER_PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = app.getRequestHandler()

const start = async () => {
  await app.prepare();
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(` Ready on http://localhost:${port}`)
  })
}

module.exports = start;
