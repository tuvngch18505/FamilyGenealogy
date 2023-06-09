import mongoose from "mongoose";

const User = new mongoose.model("User", new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        fullName: { type: String },
        dateOfBirth: { type: String, required: true },
        age: { type: String, required: true },
        address: { type: String, required: true },
        avatar: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true
    }
))

export default User;