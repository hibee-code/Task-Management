import mongoose from "mongoose"


const task = new mongoose.Schema({
    id: Number,
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true, 
    },
    status: Boolean,
});

export const taskModel = mongoose.model("task_created", task);