import { FastifyInstance } from 'fastify';

import { rootRoute } from './routes/root';

export const apiHealthCheck = async (instance: FastifyInstance) => {
  instance.get('/', rootRoute);
};
