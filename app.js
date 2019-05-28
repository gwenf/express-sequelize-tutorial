const path = require('path')

require('module-alias/register')
require("babel-core").transform("code", {})

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.prod') })
} else {
  require('dotenv').config({ debug: true })
}

require('./server')
