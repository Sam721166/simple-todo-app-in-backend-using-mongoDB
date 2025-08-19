const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/todo-app")


const todoModel = mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user", todoModel)

