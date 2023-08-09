import { Driver } from "./driver";

export type DrivenPort = {
  findAll(year: string): Promise<Driver[]>;
  findById(id: string): Promise<Driver>;
};
