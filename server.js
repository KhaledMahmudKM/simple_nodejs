const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to return a random quote
app.get('/api', (req, res) => {
  const filePath = path.join(__dirname, 'quotes.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unable to read quotes file' });
    }

    // Split and clean up each line
    const quotes = data
      .split('\n')
      .map(line => line.trim()) // remove \r, spaces, etc.
      .filter(line => line.length > 0);

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
