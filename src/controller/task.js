import express from "express";



export const createTask = async (req, res) => {
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
    } catch (error) {

    }
};


export const getAllTask = async (req, res) => {
    try {
      return res.json({
        success: true,
        message: "All tasks is successfully extracted",
        tasks: tasks,
      });
    } catch (error) {
      return res.sendStatus(400).json();
    }
};


export const getTask = async (req, res) => {
    try {
      const { id } = req.params;
      const taskId = Number(id);
      const task = tasks.find((task) => task.id === taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json({ 
        success: true, 
        message: " your task has been retrieved", 
        task : task
      });
  
    } catch (error) {
      return res.sendStatus(400).json();
    }
};