import express from "express"
import * as dotenv from 'dotenv'
import connect from "./database/index.js";
import { userRouter, postRouter, commentRouter } from "./routers/index.js"
dotenv.config();
const app = express();
app.use(express.json());

//routes
app.use("/users", userRouter);
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

const PORT = process.env.PORT || 8002;


app.listen(PORT, async () => {
    await connect();
    console.log(`Server is running on ${PORT}`);
})