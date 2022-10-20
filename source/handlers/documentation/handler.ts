import { FastifyInstance } from 'fastify';

import { rootRoute } from './routes/root';

export const apiDocumentation = async (instance: FastifyInstance) => {
  instance.get('/', rootRoute(instance.swagger()));
};
