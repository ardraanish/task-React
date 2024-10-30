const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    designation: {
        type: String,
        required: [true, 'please add a designation']
    },
    email: {
        type: String,
        required: [true, 'please add an email']
    },
    status: {
        type: String,
        required: [true, 'please add a status']
    },
    role: {
        type: String,
        required: [true, 'please add a role']
    }

},{
    Timestamp: true
})

module.exports = mongoose.model('users' , userSchema)