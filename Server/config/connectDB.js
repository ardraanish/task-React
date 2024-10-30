const mongoose = require('mongoose')
const CONNECTION_STRING = 'mongodb+srv://ardraanish:gowrimelady@ardracluster.ht2xm.mongodb.net/Task-management'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(CONNECTION_STRING)
        console.log('Database connected' , connect.connection.host , connect.connection.name);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB