// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://tapha-shop-api.herokuapp.com',
  envName: 'PROD',
  API_URL: '/api'
};

// export const environment = {
//   production: true,
//   version: env.npm_package_version,
//   serverUrl: '/api',
//   envName: 'PROD',
//   API_URL: 'assets/api'
// };
