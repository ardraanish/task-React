const asyncHandler = require("express-async-handler");
const taskServices = require("../services/tasks.services");

/**
 * @description Get All Tasks
 * @route GET /tasks
 * @access private
 */
const getTasks = asyncHandler(async (req, res) => {
  const task = await taskServices.getAllTAsk();
  res.status(200).json(task);
});

/**
 * @description Get Task
 * @route GET /tasks/:id
 * @access private
 */
const getTask = asyncHandler(async (req, res) => {
  const task = await taskServices.getTask(req.params.id);
  res.status(200).json(task);
});


/**
 * @description Create Task
 * @route POST /tasks/:id
 * @access private
 */
const createTask = asyncHandler(async (req, res) => {
  const {title , userId , stage , priority } = req.body
  if(!userId) {
    console.log('userId is required');
  }
  console.log('user Id : ' , userId)
  const tasks = await taskServices.createTask(req.body);
  res.status(200).json(tasks);
});


/**
 * @description Update Task
 * @route PUT /tasks/:id
 * @access private
 */
const updateTask = asyncHandler(async (req, res) => {
  try {
    const task = await taskServices.updateTask(req.params.id, req.body);
    res.status(200).json(task);
  } catch (error) {
    throw new Error(error);
  }
});


/**
 * @description Delete Task
 * @route DELETE /tasks/:id
 * @access private
 */
const deleteTask = asyncHandler(async(req, res) => {
  const task = await taskServices.deleteTask(req.params.id)
  res.status(200).json({message: "Task deleted successfully"})
});

module.exports = { getTasks, getTask, updateTask, createTask, deleteTask };