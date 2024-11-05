import { type Car } from "../types";

const createCar = (color: string, brand: string, model: string): Car => {
  const newCar: Car = {
    id: crypto.randomUUID(),
    brand,
    model,
    color,
  };

  return newCar;
};

export default createCar;
