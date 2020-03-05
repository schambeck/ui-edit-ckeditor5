const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
const folder = `${__dirname}/dist/${nomeApp}`;
const port = process.env.PORT || 8080;

console.log(folder);
app.use(express.static(folder));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

console.log(`http://localhost:${port}`);
app.listen(port);
