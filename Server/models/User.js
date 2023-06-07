import mongoose from "mongoose";

const User = mongoose.model("User", new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        fullName: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        age: { type: String, required: true },
        address: { type: String, required: true },
        avatar: { type: String, required: true },
        userName: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true
    }
))

export default User;