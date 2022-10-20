import { FastifySchema } from 'fastify/types/schema';

export const rootSchema: FastifySchema = {
  description: 'post some data',
  tags: ['user', 'code'],
  summary: 'qwerty',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id',
      },
    },
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        hello: { type: 'string' },
      },
    },
    default: {
      description: 'Default response',
      type: 'object',
      properties: {
        foo: { type: 'string' },
      },
    },
  },
  security: [
    {
      apiKey: [],
    },
  ],
};
