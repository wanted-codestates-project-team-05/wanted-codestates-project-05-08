const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/pubdata',
    createProxyMiddleware({
      target: 'https://www.chungbuk.go.kr/openapi-json',
      changeOrigin: true,
    })
  );
};
