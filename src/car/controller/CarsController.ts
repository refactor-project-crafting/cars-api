import { type Request, type Response } from "express";
import { type CarsControllerStructure } from "./types";
import { type Car } from "../types";

class CarsController implements CarsControllerStructure {
  constructor(private readonly cars: Car[]) {}

  get = (_req: Request, res: Response): void => {
    res.status(200);
    res.json({ cars: this.cars });
  };

  delete(req: Request<{ id: string }>, res: Response): void {
    const { id } = req.params;

    const carPosition = this.cars.findIndex((car) => car.id === id);

    if (carPosition === -1) {
      res.status(404).json({ error: "Car not found" });
      return;
    }

    this.cars.splice(carPosition, 1);

    res.status(200).json({ message: "Car deleted" });
  }
}

export default CarsController;
