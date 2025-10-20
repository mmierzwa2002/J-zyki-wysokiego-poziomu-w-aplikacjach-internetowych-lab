const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
        <h1>O nas</h1>
        <p>Jesteśmy zespołem pasjonatów programowania. Tworzymy aplikacje webowe.</p>
        <a href="/contact">Kontakt</a> | <a href="/services">Usługi</a>
        `);
    return;
  } else if (path === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Kontakt</h1>
        <p>Możesz się z nami skontaktować pod adresem: <strong>kontakt@firma.pl</strong></p>
        <a href="/about">O nas </a> | <a href = "/services">Usługi</a>
        `);
    return;
  } else if (path === "/services") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
        <h1>Nasze usługi</h1>
        <ul>
            <li>Tworzenie stron internetowych</li>
            <li>Aplikacje mobilne</li>
            <li>Automatyzacja procesów biznesowych</li>
        </ul>
        <a href="/about">O nas</a> | <a href="/contact">Kontakt</a>
        `);
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
        <h1>404 - Strona nie znaleziona</h1>
        <p>Nie ma takiej podstrony</p>
        <a href="/about">O nas</a>
        `);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
  console.log("Dostępne podstrony: /about, /contact, /services");
});
