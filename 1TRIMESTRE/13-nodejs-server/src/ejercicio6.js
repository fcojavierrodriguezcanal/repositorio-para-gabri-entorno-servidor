const http = require('http');
const server = http.createServer((req, res) => {
  const query = require('url').parse(req.url, true).query;
  const name = query.name;
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end(`Hello ${name}`);
});
server.listen(3000);

