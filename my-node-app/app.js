const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD Pipeline!');
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
