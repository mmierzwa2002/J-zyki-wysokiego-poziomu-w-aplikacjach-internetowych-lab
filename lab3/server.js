const http = require("http");
const url = require("url");
const router = require("./router.js");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  const pageData = router.handleRequest(path);
  res.writeHead(pageData.statusCode, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.end(pageData.content);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
  console.log("Dostępne podstrony: /about, /contact, /services");
});
