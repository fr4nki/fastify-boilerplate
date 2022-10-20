import { type LogLevel } from 'fastify';
import { type ErrorObject } from 'ajv';

export type AppConfigEnvironment = 'dev' | 'production';

export type AppConfig = {
  APP_ENV: AppConfigEnvironment;
  APP_PORT: number;
  LOGGER_VERBOSITY: LogLevel;
};

export type ValidateResult = {
  isOk: boolean;
  config: AppConfig | undefined;
  errors?: null | ErrorObject[];
};
