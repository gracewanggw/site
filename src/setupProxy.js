// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/data',  // Your API endpoint
    createProxyMiddleware({
      target: 'https://site-api-3nj6.onrender.com',  // Replace with your server's address
      changeOrigin: true,
    })
  );
};
