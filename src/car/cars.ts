import createCar from "./factory/index.js";
import { type Car } from "./types";

const fiesta: Car = createCar("rojo", "Ford", "Fiesta");
const panda: Car = createCar("amarillo", "Seat", "Panda");

const cars: Car[] = [fiesta, panda];

export default cars;
