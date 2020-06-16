'use strict'

const path = require('path')
const express = require('express')
const db = require('./db.js')
const mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello World, I\'m Node.js')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

mainRouter.get('/database', function (req, res) {
  db.pools
    .then((pool) => {
      return pool.request()
        .query('INSERT INTO UserAccounts (USerPassword) VALUES (\'alice\')')
    })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send({
        Error: err
      })
    })
})
module.exports = mainRouter
