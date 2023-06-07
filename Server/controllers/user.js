
const login = async (req, res) => {
    res.send("<h1>Login Success fully</h1>")
}

const register = async (req, res) => {
    res.send("<h1>Register Success fully</h1>");
}

export default {
    login,
    register
}