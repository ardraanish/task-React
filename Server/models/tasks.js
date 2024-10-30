const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title : {
        type: String,
      required: [true, "please add a title"],
    },
    date : {
        type: Date,
      default: new Date(),
    },
    priority : {
        type: String,
        default: "normal",
        required: [true, "please add priority"],
    },
    stage : {
        type: String,
        default : "todo",
      required: [true, "please add stage"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "users",
    },
},{
    Timestamp : true,
})

module.exports = mongoose.model("tasks", taskSchema);