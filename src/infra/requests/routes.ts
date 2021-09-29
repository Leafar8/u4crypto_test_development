import { createAccidentEventController } from '../../domain/useCases/createAccident';
import { createClientController } from '../../domain/useCases/createClient';
import { editClientRegistrationController } from '../../domain/useCases/editClient';

export const routes = [
  {
    method: 'POST',
    path: '/client',
    options: {
      handler: createClientController.handle,
    },
  },
  {
    method: 'PUT',
    path: '/client',
    options: {
      handler: editClientRegistrationController.handle,
    },
  },
  {
    method: 'POST',
    path: '/accident',
    options: {
      handler: createAccidentEventController.handle,
    },
  },
];
