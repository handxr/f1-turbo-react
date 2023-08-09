import { Driver } from "../domain";
import { DrivenPort } from "../domain/driven-port";

export class ApiDriversRepository implements DrivenPort {
  private readonly url = "https://ergast.com/api";
  private readonly currentYear = new Date().getFullYear().toString();

  public async findAll(year: string = this.currentYear): Promise<Driver[]> {
    const response = await fetch(this.url + `/f1/${year}` + "/drivers.json");
    const json = await response.json();
    return json.MRData.DriverTable.Drivers;
  }

  public async findById(
    id: string,
    year: string = this.currentYear
  ): Promise<Driver> {
    const response = await fetch(
      this.url + `/f1/${year}` + `/drivers/${id}.json`
    );
    const json = await response.json();
    return json.MRData.DriverTable.Drivers[0];
  }
}
