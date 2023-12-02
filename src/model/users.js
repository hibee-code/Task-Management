import mongoose from "mongoose"

const userSchema = new mongoose.schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    accessToken: {
        type: String,
        default: ''
    }
});

export const UserModel = mongoose.model("taskUser", userSchema)


