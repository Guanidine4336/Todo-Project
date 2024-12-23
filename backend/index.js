const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types"); // Correct import
const todo = require("./db"); // Correct import
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.post("/todo", async function (req, res) {
    const createpayload = req.body;
    const parsedpayload = createTodo.safeParse(createpayload);

    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs",
        });
        return;
    }

    // Add todo to MongoDB
    await todo.create({
        title: createpayload.title,
        descr: createpayload.descr,
        completed: false,
    });

    res.json({
        msg: "Todo created",
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});

    res.json({
        todos,
    });
});

app.put("/completed", async function (req, res) {
    const updatepayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatepayload);

    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs",
        });
        return;
    }

    await todo.updateOne(
        { _id: updatepayload.id },
        { completed: true }
    );

    res.json({
        msg: "Todo has been updated",
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
