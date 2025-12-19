import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRouter.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT | 4000;

await connectDB();
const allowOrigins = ['http://localhost:5173'];

//Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowOrigins, credentials: true}));

app.get("/", (req, res) => {
  console.log(`--------${req.url}---------`)
  res.send("API is Working");
});
app.use('/api/user', userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});