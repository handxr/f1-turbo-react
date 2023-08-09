import { Driver } from "./driver";

export type DrivingPort = {
  findAll(): Promise<Driver[]>;
  findById(id: string): Promise<Driver>;
};
