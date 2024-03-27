const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'http://localhost:4000',
            target: 'https://flipzone.onrender.com',
            headers:{
                "Connection": "keep-alive"
            },
            followRedirects: true,
            changeOrigin: true, 
        })
      );
};