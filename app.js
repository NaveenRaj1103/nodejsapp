const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/quote', (req, res) => {
  const quotes = JSON.parse(fs.readFileSync('quotes.json'));
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
