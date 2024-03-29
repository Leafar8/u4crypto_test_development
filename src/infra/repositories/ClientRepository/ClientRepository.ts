import { getRepository } from 'typeorm';
import { Accident } from '../../../domain/entities/Accident';
import { Client } from '../../../domain/entities/Client';
import { IClientRepository } from './IClientRepository';

export class ClientRepository implements IClientRepository {
  async save(data: Client): Promise<Client> {
    try {
      const clientRepository = getRepository(Client);
      const client = new Client();
      Object.assign(client, data);
      await clientRepository.save(client);

      return client;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(data: Client): Promise<void> {
    try {
      const clientRepository = getRepository(Client);
      const clientToUpdate = await clientRepository.findOne({
        cpf: data.cpf,
      });

      clientToUpdate.name = data.name;
      clientToUpdate.email = data.email;
      clientToUpdate.address = data.address;

      await clientRepository.save(clientToUpdate);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByCpf(cpf: string): Promise<Client> {
    try {
      const clientRepository = getRepository(Client);
      const client = await clientRepository.findOne({ cpf });

      return client;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addAccident(client: Client, data: Accident): Promise<void> {
    try {
      const clientRepository = getRepository(Client);
      const clientToAddAccident = await clientRepository.findOne({cpf: client.cpf});
      clientToAddAccident.accidents = [data];

      await clientRepository.save(clientToAddAccident);
    } catch (error) {
      throw new Error(error);
    }
  }
}
