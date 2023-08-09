import { Driver } from "../domain";
import { DrivenPort } from "../domain/driven-port";

export class ApiDriversRepository implements DrivenPort {
  private readonly url = "https://ergast.com/api/f1/2023";

  async findAll(): Promise<Driver[]> {
    const response = await fetch(this.url + "/drivers.json");
    const json = await response.json();
    return json.MRData.DriverTable.Drivers;
  }

  async findById(id: string): Promise<Driver> {
    const response = await fetch(this.url + `/drivers/${id}.json`);
    const json = await response.json();
    return json.MRData.DriverTable.Drivers[0];
  }
}
