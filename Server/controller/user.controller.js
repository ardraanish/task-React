const asyncHandler =  require('express-async-handler')
const userServices = require('../services/user.services')

/**
 * @description Get All user
 * @route GET /users
 * @access private
 */

const getUsers = asyncHandler( async (req,res) => {
    const user = await userServices.getAllUser()
    res.status(200).json(user)
})


module.exports = {getUsers}