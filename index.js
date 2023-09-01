import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
let todos = [{}];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
 })

app.post("/",(req,res)=>{
    const inputTodoId = todos.length + 1;
    const inputTodoTask = req.body["newItem"];
    todos.push({
        todoId: inputTodoId,
        todoTask: inputTodoTask
    })
    console.log(todos);
  res.render("index.ejs",{todoList: todos});
});

app.listen(port,()=>{
   console.log("Listening on server 3000"); 
})