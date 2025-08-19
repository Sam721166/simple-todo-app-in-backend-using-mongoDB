const express = require("express")
const app = express()
const todoModel = require("./model/user")

app.use(express.json())

// get all todo list
app.get("/todo", async (req, res) => {
    const todo = await todoModel.find()
    res.json( todo )
})

// create new todo
app.post("/todo",async (req, res) => {
    const {title, completed} = req.body

    const todo = await todoModel.create({
        title: title,
        completed: completed
    })
    res.json( todo )
})

//edit todo
app.put("/todo/:id", async (req, res) => {
    const id = req.params.id
    await todoModel.findByIdAndUpdate(id, req.body, {new: true})
    res.json(todo)
})

//delete todo
app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id
    await todoModel.findByIdAndDelete(id)
    res.json({
        msg: "todo deleted successfully"
    })
})


app.listen(3000, () => {
    console.log("it's running...");
    
})