const dotenv = require('dotenv');
const Joi = require('joi');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    APP_NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    APP_PROTOCOL: Joi.string().valid('http', 'https').required(),
    APP_PORT: Joi.number().default(3001),
    APP_URL: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    app: {
        env: envVars.NODE_ENV,
        protocol: envVars.APP_PROTOCOL,
        url: envVars.APP_URL,
        port: envVars.APP_PORT,
    },
};

module.exports = config;

