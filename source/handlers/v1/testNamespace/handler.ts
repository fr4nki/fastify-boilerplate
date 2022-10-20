import { FastifyInstance } from 'fastify';

import { rootRoute, rootSchema } from './routes/root';

export const apiTestNamespace = async (instance: FastifyInstance) => {
  instance.get('/', { schema: rootSchema }, rootRoute);
};
