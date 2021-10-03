import { Accident } from '../../../domain/entities/Accident';
import { Client } from '../../../domain/entities/Client';
import { ThirdParty } from '../../../domain/entities/ThirdParty';
import { Vehicle } from '../../../domain/entities/Vehicle';

export interface IAccidentRepository {
  save(client: Client, vehicle: Vehicle, thirdParty: ThirdParty[]): Promise<Accident>;
}
