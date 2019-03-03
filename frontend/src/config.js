const config = {
  development: {
    BACKEND_URL: 'http://localhost:3001',
  },
  production: {
    BACKEND_URL: 'https://a9dvyhc6ej.execute-api.eu-north-1.amazonaws.com/dev',
  },
};
export default config[process.env.NODE_ENV];
