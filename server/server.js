const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.write("welcome to node server");
  res.end();
});

server.listen(8000);
