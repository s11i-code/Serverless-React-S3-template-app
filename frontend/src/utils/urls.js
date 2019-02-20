const config = {
  development: {
    BACKEND_URL: 'http://localhost:3001',
  },
  production: {
    BACKEND_URL: 'https://byqoa7pqz5.execute-api.eu-north-1.amazonaws.com/dev/',
  },
};
const { BACKEND_URL } = config[process.env.NODE_ENV];
const RESOURCES_URL = `${BACKEND_URL}/resources`;

// eslint-disable-line import/prefer-default-export

export { RESOURCES_URL };
