const fs = require('fs')
const { createLogger, format, transports } = require('winston')
require('winston-daily-rotate-file')

const logDir = 'utils/logger/logs'

// creates a directory if it doesnt exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-DailyTransactions.log`
})

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.timestamp({
          format: 'MM-DD-YY HH:mm:ss'
        }),
        format.printf(
          info => `[${info.level}] ${info.timestamp}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]}
)

module.exports.apiHandler = (func) => (req, res) => {
  try {
    logger.info(req.body(), res.status())
    func(req, res, logger)
  } catch(e){
    logger.info('server handler failed')
    res.send('Something did not go well!')
  }
}

module.exports = logger
