const express = require('express')
// add our router
const authorRouter = express.Router()
// require the author controller
const authorController = require('../controllers/authorController.js')
// handle the GET request to get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res))
authorRouter.get('/:id',(req, res) => authorController.getAuthorByID(req, res))
authorRouter.post('/', (req, res) => authorController.storeJson(req, res))

// export the router
module.exports = authorRouter