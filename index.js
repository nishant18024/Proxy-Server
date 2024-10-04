const httpProxy = require('http-proxy');

const target = 'http://devapi.positivty.com';
const proxy = httpProxy.createProxyServer({
  target,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

const port = 3001;

const server = require('http').createServer((req, res) => {
  proxy.web(req, res);
});

server.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});