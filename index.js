import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// db connection
connectDb();

// express instance
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(userRoutes)

// PORT
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});