import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//json response
app.use(
  express.json({
    limit: "16kb",
  })
);

//query response url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//images,  assets
app.use(express.static("public"));

// user browser cookies access ,set cookies also ,  CRUD operation on cookies
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declare
app.use("/api/v1/users", userRouter);

export { app };
