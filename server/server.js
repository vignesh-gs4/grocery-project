import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT | 4000;

await connectDB();

const allowOrigins = ['http://localhost:5173'];

//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowOrigins, credentials: true}));

app.get("/", (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});