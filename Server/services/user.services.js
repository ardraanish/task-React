const Users = require('../models/users.model')

// get all users

async function getAllUser() {
    try {
        const user = await Users.find()
        return user
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {getAllUser}