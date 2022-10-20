import { FastifyReply, FastifyRequest } from 'fastify';

export const rootRoute = (request: FastifyRequest, reply: FastifyReply) => {
  reply.status(200).send({ ok: true });
};
