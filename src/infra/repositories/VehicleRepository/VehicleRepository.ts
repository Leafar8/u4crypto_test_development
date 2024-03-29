import { getRepository } from 'typeorm';
import { Vehicle } from '../../../domain/entities/Vehicle';
import { IVehicleRepository } from './IVehicleRepository';

export class VehicleRepository implements IVehicleRepository {
  async save(data: Vehicle): Promise<Vehicle> {
    try {
      const vehicleRepository = getRepository(Vehicle);
      const vehicle = new Vehicle();
      Object.assign(vehicle, data);
      await vehicleRepository.save(vehicle);

      return vehicle;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByRenavam(renavam: string): Promise<Vehicle> {
    try {
      const vehicleRepository = getRepository(Vehicle);
      const vehicle = await vehicleRepository.findOne({ renavam });

      return vehicle;
    } catch (error) {
      throw new Error(error);
    }
  }
}
