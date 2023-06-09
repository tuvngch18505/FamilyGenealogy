class Exception extends Error {
    static WRONG_EMAIL_OR_PASSWORD = "Wrong email or password!"
    static EXISTING_USER = "Email already exits in System!"
    constructor(message, ) {
        super(message); //call constructor of parent class Error

    }

}

export default Exception;