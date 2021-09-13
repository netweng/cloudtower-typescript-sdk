const { generateApi } = require('swagger-typescript-api');
const http = require('http');
const fs = require('fs');
const path = require('path');

const swaggerFile = path.resolve(__dirname, '../swagger-3.0.json');
const file = fs.createWriteStream(swaggerFile);
http.get('http://api-test.gitops-cloudtower.smartx.com/v2/api/swagger3.json', (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close(() => {
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
    })
  })
}).on('error', () => {
  console.warn('download file error:', error)
})
