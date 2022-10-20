import fastify from 'fastify';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import promMetrics from 'fastify-metrics';

import { applicationConfig } from '~/config/application';
import { baseSwaggerSchema } from '~/config/swagger';

import { apiHealthCheck } from '~/handlers/healthCheck';
import { apiDocumentation } from '~/handlers/documentation';

import { apiTestNamespace } from '~/handlers/v1/testNamespace';

const runPreflightCheck = () => applicationConfig.validate();

(async () => {
  const engine = fastify({
    logger: { level: 'info' },
  });

  const preflightCheck = runPreflightCheck();

  if (!preflightCheck.isOk) {
    engine.log.fatal(
      { errors: preflightCheck.errors },
      'Preflight check not passed'
    );
    process.exit(1);
  }

  const config = applicationConfig.get();

  await engine.register(promMetrics, { endpoint: '/metrics' });

  await engine.register(swagger, { swagger: baseSwaggerSchema });

  await engine.register(
    async (instance) => {
      await instance.register(helmet);

      await instance.register(cors, {
        origin: '*',
        methods: 'GET,PUT,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
      });

      await instance.register(rateLimit, {
        global: true,
        max: 20000,
        timeWindow: 1000 * 60,
        addHeadersOnExceeding: {
          'x-ratelimit-limit': false,
          'x-ratelimit-remaining': false,
          'x-ratelimit-reset': true,
        },
        addHeaders: {
          'x-ratelimit-limit': false,
          'x-ratelimit-remaining': false,
          'x-ratelimit-reset': true,
          'retry-after': false,
        },
      });

      await instance.register(apiTestNamespace, { prefix: '/test' });
    },
    {
      prefix: '/v1',
      logLevel: config.LOGGER_VERBOSITY,
    }
  );

  await engine.register(apiHealthCheck, { prefix: '/health-check' });

  await engine.register(apiDocumentation, { prefix: '/documentation' });

  await engine.listen({ port: config.APP_PORT, host: '0.0.0.0' }, (error) => {
    if (error) {
      engine.log.fatal(error.message);
      process.exit(1);
    }
  });
})();
