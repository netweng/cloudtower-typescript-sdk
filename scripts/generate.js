const { generateApi } = require('swagger-typescript-api');
const path = require('path');


generateApi({
  name: 'operation-api.ts',
  output: path.resolve(__dirname, '../src/generated'),
  input: path.resolve(__dirname, '../swagger-3.0.json'),
  generateUnionEnums: true,
  generateRouteTypes: true,
  generateResponses: true,
  moduleNameFirstTag: false,
  httpClientType: 'axios',
})
