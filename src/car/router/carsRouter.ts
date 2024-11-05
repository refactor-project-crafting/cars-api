import { Router } from "express";
import CarsController from "../controller/CarsController.js";
import cars from "../cars.js";

const carsRouter = Router();

const carsController = new CarsController(cars);

carsRouter.get("/", carsController.get);
carsRouter.delete("/:id", carsController.delete);

export default carsRouter;
