import mongoose from "mongoose"

const Post = new mongoose.model("Post", new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    userId: { type: Number, required: true },
    commentId: { type: Number, required: true },
    content: { type: Number, required: true },
    file: { type: Number, default: 0},
    like: { type: mongoose.Types.Number, ref: "User" },
    disLike: { type: mongoose.Schema.Types.Number, ref: "User" },

}, { 
    timestamps
}))

export default Post;