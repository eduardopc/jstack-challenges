module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*'); // HABILITA TODOS OS METODOS (GET, POST, DELETE, UPDATE) DE SEREM FEITOS PELO BROWSER
  response.setHeader('Access-Control-Allow-Headers', 'x-app-id'); // HABILITA CUSTOM HEADERS
  response.setHeader('Access-Control-Max-Age', '7200');
  next();
};
