import { Driver } from "./driver";

export type DrivingPort = {
  findAll(year: string): Promise<Driver[]>;
  findById(id: string): Promise<Driver>;
};
