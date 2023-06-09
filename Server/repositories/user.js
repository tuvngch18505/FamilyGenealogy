import { UserModel } from "../models/index.js"

const changePassword = async () => {
    
}

const deleteUser = async () => {
    
}

const updateUser = async () => {

}

const getAllUsers = async () => {
    const getUser = await UserModel.find({}).exec();
    return getUser;
}

export default { login, register, getAllUsers }