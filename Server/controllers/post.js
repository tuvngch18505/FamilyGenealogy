const getAllPost = async (req,res) => {
    res.send("<h1> Get all post</h1>")
}
const getPostById = async (req,res) => {
    const {id} = req.params;
    res.send(`get id: ${id}`)
}


const createPost = async () => {

}

const updatePost = async () => {
    
}

const deletePost = async () => {
    
}

export default {
    getAllPost, getPostById, createPost, updatePost, deletePost
}
