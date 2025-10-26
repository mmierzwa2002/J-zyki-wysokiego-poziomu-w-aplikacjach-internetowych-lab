function getAboutPage() {
  return `
        <h1>O nas</h1>
        <p>Jesteśmy zespołem pasjonatów programowania. Tworzymy aplikacje webowe.</p>
        <a href="/contact">Kontakt</a> | <a href="/services">Usługi</a>
    `;
}

function getContactPage() {
  return `
        <h1>Kontakt</h1>
        <p>Możesz się z nami skontaktować pod adresem: <strong>kontakt@firma.pl</strong></p>
        <a href="/about">O nas </a> | <a href = "/services">Usługi</a>
    `;
}

function getServicesPage() {
  return `
        <h1>Nasze usługi</h1>
        <ul>
            <li>Tworzenie stron internetowych</li>
            <li>Aplikacje mobilne</li>
            <li>Automatyzacja procesów biznesowych</li>
        </ul>
        <a href="/about">O nas</a> | <a href="/contact">Kontakt</a>
    `;
}

function get404Page() {
  return `
        <h1>404 - Strona nie znaleziona</h1>
        <p>Nie ma takiej podstrony</p>
        <a href="/about">O nas</a>
    `;
}

exports.handleRequest = function (path) {
  let content;
  let statusCode = 200;

  if (path === "/about") {
    content = getAboutPage();
  } else if (path === "/contact") {
    content = getContactPage();
  } else if (path === "/services") {
    content = getServicesPage();
  } else {
    statusCode = 404;
    content = get404Page();
  }

  return {
    statusCode: statusCode,
    content: content,
  };
};
