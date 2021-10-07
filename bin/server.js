#!/usr/bin/env node
const compression = require('compression');
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 8080;

const publicPath = path.join(__dirname, '..', 'dist');
const app = express();

app.use(compression());
app.use('/', express.static(publicPath));
app.get('/*', (request, response) => {
  const path = `${request.originalUrl}/index.html`
  const fallback = `${publicPath}/index.html`

  if (fs.existsSync(path)) 
    return response.sendFile(path)

  return response.sendFile(fallback)
});
app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`Server started!`);
// eslint-disable-next-line no-console
console.log(`http://localhost:${PORT}`);