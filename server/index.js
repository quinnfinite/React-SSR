import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App'
import fs from 'fs';
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')))

const port = 8000;

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App/>);
  const indexFile = path.resolve('./views/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Ooops, better luck next time');
    }
    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    )
  })
})

app.listen(port, ()=> {
  console.log(`Listening at http://localhost:${port}`)
})