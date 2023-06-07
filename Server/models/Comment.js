import mongoose from "mongoose";

const Comment = mongoose.model("Comment", new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    userId: { type: Number, required: true },
    ideaId: { type: Number, required: true },
    content: { type: String, required: true },
    file: { type: String, required: true},
    
}, { 
    timestamps
}))

export default Comment;