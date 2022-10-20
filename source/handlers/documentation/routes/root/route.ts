import { FastifyReply, FastifyRequest } from 'fastify';
import { OpenAPI } from 'openapi-types';

export const rootRoute =
  (doc: OpenAPI.Document) => (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send(doc);
  };
