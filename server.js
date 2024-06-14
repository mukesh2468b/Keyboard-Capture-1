'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const logFile = 'keylogs.txt';

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch the logs
app.get('/logs', (req, res) => {
  fs.readFile(logFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading log file');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
