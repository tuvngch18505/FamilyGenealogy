const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userRepository.login(req.body);
        
        res.status(HttpStatusCode.OK).json({
            message: "Login successfully",
            data: existingUser,
        })

    } catch (exception) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            message: exception
        })
    }

}

const register = async (req, res) => {
    try {

        const {
            id,
            email,
            password,
            lastName,
            firstName,
            dateOfBirth,
            age,
            address,
            avatar,
            fullName
        } = req.body;

        const registerUser = await userRepository.register(req.body);

        res.status(HttpStatusCode.OK).json({
            message: 'Register Success fully',
            data: registerUser
        })

    } catch (exception) {
        
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}



export default {
    login,
    register,
}