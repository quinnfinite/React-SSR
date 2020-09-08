import React from 'react';

const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')))

const port = 8000;

app.get('/', (req, res) => {


  res.sendFile('index');
})

app.listen(port, ()=> {
  console.log(`Listening at http://localhost:${port}`)
})