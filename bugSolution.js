const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to find user by ID ...
    if (!user) {
      return res.status(404).send('User not found');
    }
    // ... send user data ...
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));