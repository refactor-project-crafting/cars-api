import express from "express";
import morgan from "morgan";
import carsRouter from "../car/router/carsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use("/cars", carsRouter);

export default app;
