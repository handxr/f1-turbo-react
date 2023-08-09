import { Driver } from "../domain";
import { DrivenPort } from "../domain/driven-port";
import { DrivingPort } from "../domain/driving-port";

export class DriversService implements DrivingPort {
  constructor(private readonly driversRepository: DrivenPort) {}

  public async findAll(): Promise<Driver[]> {
    return this.driversRepository.findAll();
  }

  public async findById(id: string): Promise<Driver> {
    return this.driversRepository.findById(id);
  }
}
