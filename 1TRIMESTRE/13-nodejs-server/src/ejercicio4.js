const http = require('http');
const path = require('path');
const fs = require('fs');
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
  if (req.url === "/page") {

    fs.readFile(`treraya.html`, (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    
  });
  } 
  else if (req.url === "/error") {

      res.end(res.end("<h1>Error 404: Page Not Found</h1>"));
    

  }
  
  }
);


server.listen(3000);