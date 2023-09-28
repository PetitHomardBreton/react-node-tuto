const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('le serveur est lancé sur le port : ' + PORT);
});