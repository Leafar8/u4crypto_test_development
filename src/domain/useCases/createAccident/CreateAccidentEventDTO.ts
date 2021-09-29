import { ThirdParty } from '../../entities/ThirdParty';
import { Vehicle } from '../../entities/Vehicle';

export interface ICreateAccidentEventRequestDTO {
  client: {
    cpf: string;
  };
  vehicle: Vehicle;
  thirdParties: ThirdParty[];
}
