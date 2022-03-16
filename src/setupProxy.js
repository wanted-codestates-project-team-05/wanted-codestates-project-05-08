const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr/6430000/cbRecreationalForestInfoService/getRecreationalForestInfo',
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
