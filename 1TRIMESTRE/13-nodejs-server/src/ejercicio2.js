const http = require('http');
const path = require('path');

const testPage = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
<h1>browser test</h1>
<script>console.log('you can serve up scripts with this')</script>
</body>
</html>
`;

const server = http.createServer((req, res) => {

    res.end("<html><body><h1>Probando el ejercicio 2</h1></body></html>");
  }
);

server.listen(3000);