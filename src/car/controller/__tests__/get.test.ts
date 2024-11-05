import { type Response, type Request } from "express";
import CarsController from "../CarsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the get method of the CarsController class", () => {
  describe("When it receives a response", () => {
    const cars = [
      {
        id: "a",
        brand: "bradn1",
        model: "model1",
        color: "blue",
      },
      {
        id: "b",
        brand: "bradn2",
        model: "model2",
        color: "green",
      },
    ];
    const carsController = new CarsController(cars);
    const req = {};
    const res: Partial<Response> = {
      status: jest.fn(),
      json: jest.fn(),
    };

    test("Then it should call the response's method status with 200", () => {
      const expectedStatusCode = 200;

      carsController.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with the cars Ford Fiesta and Seat Panda", () => {
      carsController.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        cars,
      });
    });
  });
});
