import { Driver } from "../domain";
import { DrivenPort } from "../domain/driven-port";
import { DrivingPort } from "../domain/driving-port";

export class DriversService implements DrivingPort {
  constructor(private readonly driversRepository: DrivenPort) {}

  async findAll(): Promise<Driver[]> {
    return this.driversRepository.findAll();
  }

  async findById(id: string): Promise<Driver> {
    return this.driversRepository.findById(id);
  }
}
