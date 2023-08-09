import { Driver } from "./driver";

export type DrivenPort = {
  findAll(): Promise<Driver[]>;
  findById(id: string): Promise<Driver>;
};
