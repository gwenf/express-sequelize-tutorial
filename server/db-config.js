const Sequelize = require('sequelize')

const { DB_USERNAME, DB_NAME } = process.env

module.exports =  new Sequelize(DB_NAME, DB_USERNAME, '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
