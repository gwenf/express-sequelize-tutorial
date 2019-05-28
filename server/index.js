const express = require('express')
const socketio = require('socket.io')
const cors = require('cors')
const helmet = require('helmet')
const middleware = require('swagger-express-middleware')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')

const logger = require('@logger')
const routes = require('@api')

// postgres/sequelize setup
const db = require('./db-config')

db.authenticate()
  .then(() => {
    logger.info('Connected to Postgres.')
  })
  .catch((err) => {
    logger.error('Postgres Error: ', err)
  })

// express
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

const logger = function (req, res, next) {
  if (req.originalUrl.includes('api/v')){
    let reqSource = req.socket.localAddress.split(':')
    logger.info(`${req.method} (${res.statusCode}) ${req.originalUrl} ${reqSource[reqSource.length - 1]}:${req.socket.localPort}`)
  }
  next()
}
app.use(logger)

// route definition
app.use('/api/v1', routes)

// swagger setup
middleware('./server/api/api_doc.yml', app, function(err, middleware){
  app.use(
    middleware.CORS(),
    middleware.files(),
    middleware.parseRequest(),
    middleware.mock()
  )

  app.listen(3001, function() {
    logger.info('Swagger-express-middleware running on port 3001')
    logger.info(
      'Check out swagger at: localhost:3001/api-docs or localhost:3001/api-ui'
    )
    const swaggerDocument = YAML.load('./server/api/api_doc.yml')
    app.use('/api-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  })
})

// express server and socket setup
const expressServer = app.listen(process.env.PORT || 3000)
const io = socketio(expressServer)

module.exports = {
  app,
  io
}
