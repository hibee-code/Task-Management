import express from "express";

const app = express();
const Port = 3000;

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "introduction to TaskMgt App",
    isComplete: true,
  },
  {
    id: 2,
    title: "introduction to the Task",
    isComplete: true,
  },
  {
    id: 3,
    title: "introduction to TaskMgt App",
    isComplete: true,
  },
  {
    id: 4,
    title: "introduction to TaskMgt App",
    isComplete: true,
  },
];



app.get("/tasks", async (req, res) => {
  try {
    return res.json({
      success: true,
      message: "All tasks is successfully extracted",
      tasks: tasks,
    });
  } catch (error) {
    return res.sendStatus(400).json();
  }
});


app.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = Number(id);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ 
      success: true, 
      message: " your task has bee retrieved", 
      task : task
    });

  } catch (error) {
    return res.sendStatus(400).json();
  }
});


