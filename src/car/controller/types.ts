import { type Response, type Request } from "express";

export interface CarsControllerStructure {
  get: (req: Request, res: Response) => void;
  delete: (req: Request, res: Response) => void;
}
asdfasdf;
