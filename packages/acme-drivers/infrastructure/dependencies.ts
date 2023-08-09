import { DriversService } from "../application/drivers-service";
import { ApiDriversRepository } from "./api-drivers.repository";
import { DriversAdapter } from "./drivers-adapter";

export const apiDriversRepository = new ApiDriversRepository();
export const driversService = new DriversService(apiDriversRepository);
export const driversAdapter = new DriversAdapter(driversService);
