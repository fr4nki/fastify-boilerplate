import path from 'path';
import dotenv from 'dotenv';

import { AppConfig } from './types';
import { validateConfig } from './validate';

const appConfig = () => {
  let cfg: Partial<AppConfig> = {};

  const envFilePath = path.join(__dirname, '../../../.env');

  dotenv.config({ path: envFilePath });

  const validate = () => {
    const validationResult = validateConfig();

    cfg = { ...(validationResult.config ?? {}) };

    return validationResult;
  };

  const get = () => cfg as AppConfig;

  return {
    validate,
    get,
  };
};

export const applicationConfig = appConfig();
