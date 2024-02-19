const router = require('express').Router()
const categoryController = require('../server/category/categoryController')
router.post('/category/add', categoryController.add)

module.exports = router
