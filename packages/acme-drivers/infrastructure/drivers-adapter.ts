import { Driver } from "../domain";
import { DrivingPort } from "../domain/driving-port";

export class DriversAdapter {
  constructor(private readonly driversService: DrivingPort) {}

  public async findAll(year: string): Promise<Driver[]> {
    return await this.driversService.findAll(year);
  }

  public async findById(id: string, year: string): Promise<Driver> {
    return await this.driversService.findById(id, year);
  }
}
