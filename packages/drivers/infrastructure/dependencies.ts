import { DriversService } from "../application/drivers-service";
import { ApiDriversRepository } from "./api-drivers.repository";

export const apiDriversRepository = new ApiDriversRepository();
export const driversService = new DriversService(apiDriversRepository);
