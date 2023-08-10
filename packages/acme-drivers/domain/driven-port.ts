import { Driver } from "./driver";

export type DrivenPort = {
  findAll(year: string): Promise<Driver[]>;
  findById(id: string, year: string): Promise<Driver>;
};
