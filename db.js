const mssql = require('mssql')

console.log('I am here')
// Make sure this is private to this module
const config = {
  server: 'class-list.database.windows.net',
  database: 'ClassListDB',
  // Put login details in env. variables for security
  user: 'class-list-admin',
  // user: process.env.db_login_admin,
  password: 'eiesql@2020',
  // password: process.env.db_password,
  port: 1433,
  // Required for Azure
  options: {
    encrypt: true,
    enableArithAbort: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}
// Get a mssql connection instance
let isConnected = true
let connectionError = null
const pools = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to DB')
    return pool
  })
  .catch(err => {
    // Handle errors
    isConnected = false
    connectionError = err
    console.log(err)
  })

module.exports = {
  sql: mssql,
  pools: pools,
  isConnected: isConnected,
  connectionError: connectionError
}
