const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://Guanidine:r6wZCVj4tq6Fucsk@cluster0.fpb4yjb.mongodb.net/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define schema
const todoschema = mongoose.Schema({
    title: String,
    descr: String,
    completed: Boolean,
});

// Define and export model
const todo = mongoose.model("todos", todoschema);
module.exports = todo;
