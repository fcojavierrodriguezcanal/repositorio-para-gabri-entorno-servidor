 const http = require('http');

const routes = {
 ping: () => {
 res.writeHead(200);
 res.end('hello world!\n');
}
 }

http.createServer((req, res) => {
res.setHeader("Content-Type", "application/json");
routes[`/${req.url}`]();
}).listen(4000);