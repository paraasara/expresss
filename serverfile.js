const express = require('express');
const app = express();
const port = 3000;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my application!');
});

// Example route for /orders
app.get('/orders', (req, res) => {
  res.send('Orders endpoint');
});

// Catch-all route for undefined URLs
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
