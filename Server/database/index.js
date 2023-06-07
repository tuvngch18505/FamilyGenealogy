import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect database successfully");
    } catch (exception) {
        console.log(exception.message)
    }
}

export default connect;