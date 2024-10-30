const express = require('express')
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controller/task.controller')

const router = express.Router()


router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTask).post(createTask).put(updateTask).delete(deleteTask)

module.exports = router