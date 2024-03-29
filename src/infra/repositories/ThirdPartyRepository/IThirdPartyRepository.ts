import { ThirdParty } from '../../../domain/entities/ThirdParty';

export interface IThirdPartyRepository {
  save(thirdParty: ThirdParty): Promise<ThirdParty>;
  findByCpf(cpf: string): Promise<ThirdParty>;
  delete(id: string): Promise<void>;
  migrate(id: string): Promise<void>;
}
