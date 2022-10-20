import { OpenAPIV2 } from 'openapi-types';
import packageJson from '~/../package.json';

export const baseSwaggerSchema: Partial<OpenAPIV2.Document> = {
  info: {
    title: 'API',
    description: 'API for my awesome application',
    version: packageJson.version,
  },
  externalDocs: {
    url: 'https://swagger.io',
    description: 'Find more info here',
  },
  host: 'localhost',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    { name: 'user', description: 'User related end-points' },
    { name: 'code', description: 'Code related end-points' },
  ],
  definitions: {
    User: {
      type: 'object',
      required: ['id', 'email'],
      properties: {
        id: { type: 'string', format: 'uuid' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      name: 'apiKey',
      in: 'header',
    },
  },
};
