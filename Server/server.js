const express = require('express')
const connectDB = require('./config/connectDB')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()


const port = process.env.PORT || 3000
connectDB()
    
app.use(cors());

app.use(express.json())
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
app.use('/tasks' , require('./routes/task.routes'))
app.use('/users', require('./routes/users.routes'))

app.listen(port , () => {
    console.log(`server running on ${port}`)
})