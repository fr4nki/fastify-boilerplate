import Ajv, { JSONSchemaType } from 'ajv';

import { type AppConfig, type ValidateResult } from './types';
import {
  DEFAULT_APP_ENV,
  DEFAULT_APP_PORT,
  DEFAULT_LOGGER_VERBOSITY,
} from './constants';

export const validateConfig = (): ValidateResult => {
  const schema: JSONSchemaType<AppConfig> = {
    type: 'object',
    properties: {
      APP_ENV: {
        type: 'string',
        default: DEFAULT_APP_ENV,
      },
      APP_PORT: {
        type: 'number',
        default: DEFAULT_APP_PORT,
      },
      LOGGER_VERBOSITY: {
        type: 'string',
        default: DEFAULT_LOGGER_VERBOSITY,
      },
    },
    required: ['APP_ENV'],
    additionalProperties: true,
  };

  const ajv = new Ajv({ coerceTypes: true, useDefaults: 'empty' });

  const validator = ajv.compile<AppConfig>(schema);

  const { APP_ENV, APP_PORT, LOGGER_VERBOSITY } = process.env;

  const data = {
    APP_ENV,
    APP_PORT,
    LOGGER_VERBOSITY,
  };

  const isOk = validator(data);

  return {
    isOk,
    config: isOk ? (data as AppConfig) : undefined,
    errors: validator.errors,
  };
};
