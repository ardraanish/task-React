const Tasks = require('../models/tasks')

// get all Employees

async function getAllTAsk() {
    try {
        const task = await Tasks.find()
        return task
    } catch (error) {
        throw new Error('task cannot get')
    }
}

async function getTask(id) {
try {
    const task = await Tasks.findById(id)
    return task
} catch (error) {
    throw new Error(error)
}
}

async function createTask(data , reqId) {
    try {
        const {title , date , priority ,stage , userId} = data
        return await Tasks.create({
        title , date , priority ,stage , userId
    })
    } catch (error) {
        throw new Error(error)
    }
}


async function updateTask(id , data) {
    try {
        const {title , date , priority ,stage , user_id} = data
        return await Tasks.findByIdAndUpdate(id , data , {new : true})
    } catch (error) {
        throw new Error(error)
    }
}

async function deleteTask(id){
    try {
        return await Tasks.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {getAllTAsk , createTask , getTask , updateTask , deleteTask}