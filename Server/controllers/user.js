import { userRepository } from "../repositories/index.js"

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userRepository.login(req.body);

        res.status(200).json({
            message: "Login successfully",
            data: user
        })
    } catch (exception) {
        res.status(500).json({
            message: "Login Fail",
        })
    }



}

const register = async (req, res) => {
    res.send("<h1>Register Success fully</h1>");
}

export default {
    login,
    register
}