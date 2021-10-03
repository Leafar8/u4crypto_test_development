import { Vehicle } from "../../../domain/entities/Vehicle";
export interface IVehicleRepository {
    save(vehicle: Vehicle): Promise<Vehicle>;
    findByRenavam(renavam: string): Promise<Vehicle> ;
}