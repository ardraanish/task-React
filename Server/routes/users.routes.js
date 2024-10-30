const express = require('express')
const { getUsers } = require('../controller/user.controller')
const router = express.Router()

router.route('/').get(getUsers)

module.exports = router