import { userRepository } from "../repositories/index.js"
import HttpStatusCode from "../exceptions/HttpStatusCode.js";


const updateUser = async () => {

}

const changePassword = async () => {

}

const deleteUser = async () => {

}

const getAllUser = async (req, res) => {
    try {
        const getUser = await userRepository.getAllUsers();

        res.status(HttpStatusCode.OK).json({
            message: 'Get User Success fully',
            data: getUser,
        })

    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

export default {
    updateUser,
    changePassword,
    deleteUser, 
    getAllUser,
}