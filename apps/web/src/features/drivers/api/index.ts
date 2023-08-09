import { type Driver } from "drivers/domain";

export async function fetchDriversApi(): Promise<Driver[]> {
  const cacheKey = "drivers";
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch("https://ergast.com/api/f1/2023/drivers.json");
    const data = await response.json();
    const drivers = data.MRData.DriverTable.Drivers;
    sessionStorage.setItem(cacheKey, JSON.stringify(drivers));
    return drivers;
  } catch (error) {
    console.error("Error fetching drivers data:", error);
    return [];
  }
}

export async function fetchDriverApi(driverId: string): Promise<Driver | null> {
  const cacheKey = `driver-${driverId}`;
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(
      `https://ergast.com/api/f1/2023/drivers/${driverId}.json`
    );
    const data = await response.json();
    const driver = data.MRData.DriverTable.Drivers[0];
    sessionStorage.setItem(cacheKey, JSON.stringify(driver));
    return driver;
  } catch (error) {
    console.error(
      `Error fetching driver data for driver ID ${driverId}:`,
      error
    );
    return null;
  }
}
