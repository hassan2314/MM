import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Front-end URL
    credentials: true,              // Allow cookies if needed
  }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());


//import rotuers




app.use(errorHandler);
export { app };
