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



app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isComplete } = req.body;
    const taskId = Number(id);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    if (title) {
      task.title = title;
    }

    if (isComplete) {
      task.isComplete = isComplete;
    }

    return res.json({
      success: true,
      message: " your task has been update!",
      task: task,
    });
  } catch (error) {
    return res.status(404).json({ error: "Task not found" });
  }
});


app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});
