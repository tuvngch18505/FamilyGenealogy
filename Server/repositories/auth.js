import { UserModel } from "../models/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Exception from "../exceptions/Exception.js";

const userLogin = async ({ email, password }) => {
    // step 1 enter email, password
    // check email, password correctly 
    // if wrong then login fail and true then login success

    let existingUser = await UserModel.findOne({ email }).exec();

    if (existingUser) {
        let isMatch = await bcrypt.compare(password, existingUser.password);
        if (isMatch) {
            //create jwt
            jwt.sign("", process.env.JWT_SECRET);
            console.log("Correct password");
        } else {
            console.log("Wrong email or password");
        }
    } else {
        console.log("Wrong email or password");
    }

}

const userRegister = async ({
    id,
    email,
    password,
    lastName,
    firstName,
    dateOfBirth,
    age,
    address,
    avatar,
}) => {
    debugger
    //check email existing 
    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) {
        throw new Exception(Exception.EXISTING_USER);
    }
    const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await UserModel.create({
        id,
        email,
        password: hashedPassword,
        lastName,
        firstName,
        dateOfBirth,
        age,
        address,
        avatar,
        fullName: firstName + " " + lastName
    })

    return {
        ...newUser._doc,
        password: "Not Show"
    }

}

export default {
    userLogin, userRegister
}