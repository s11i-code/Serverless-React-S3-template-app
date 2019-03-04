const REGION = 'eu-central-1';
const cognito = {
  REGION,
  USER_POOL_ID: 'eu-central-1_BjMY6X3Is',
  APP_CLIENT_ID: '1ruc0nge06np5ke3u5en3aiqqp',
  IDENTITY_POOL_ID: 'eu-central-1:d54ce934-8a25-48c3-a964-0de894dea1ec',
};

const config = {
  development: {
    cognito,
    apiGateway: {
      REGION,
      URL: 'http://localhost:3001',
    },
  },
  production: {
    cognito,
    apiGateway: {
      REGION,
      URL: 'https://jc27x4llec.execute-api.eu-central-1.amazonaws.com/dev',
    },
  },
};
export default config[process.env.NODE_ENV];
