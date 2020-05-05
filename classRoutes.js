const path = require('path')
const express = require('express')
const router = express.Router()
const classList = [] // our class list array

router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.status(201).json({ statusMessage: '201 Created' })
  // res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  const id = req.body.studentID - 1
  console.log('deleting student with ID : ', id, ' ', req.body.studentID)
  classList.splice(id, 1)
  res.status(201).json({ statusMessage: '201 Deleted' })
  // res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/edit', function (req, res) {
  const id = req.body.studentID - 1
  console.log('editing a student entry : ', req.body.studentID)
  console.log('--', classList[id])
  if (classList[id] !== undefined) {
    classList[id] = req.body.student
  }
  res.status(201).json({ statusMessage: '201 Edited' })
  // res.redirect(req.baseUrl + '/api/list')
})

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

module.exports = router
