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




app.post("/tasks", async (req, res) => {
  try {
    const { title, isComplete } = req.body;
    if (!(title && isComplete)) {
      return res.status(400).json({ error: "Invalid task data" });
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      isCompleted: true,
    };
    tasks.push(newTask);
    res.status(201).json({
      success: true,
      mesage: "a new task has been created",
      task: newTask,
    });
  } catch (error) {}
});

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});
