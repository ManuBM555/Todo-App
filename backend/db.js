const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bmmanu555:manumanu1@cluster0.h7cwnmi.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}