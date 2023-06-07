import express from "express"
import * as dotenv from 'dotenv'
import userRouter from "./routers/user.js"
dotenv.config();
import connect from "./database/index.js";
const app = express();
app.use(express.json());

//routes
app.use("/users", userRouter );

const PORT = process.env.PORT || 8002;


app.listen(PORT, async () => {
    await connect();
    console.log(`Server is running on ${PORT}`);
})