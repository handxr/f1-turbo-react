import { Driver } from "./driver";

export type DrivingPort = {
  findAll(year: string): Promise<Driver[]>;
  findById(id: string, year: string): Promise<Driver>;
};
