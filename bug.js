const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to find user by ID ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  // ... send user data ...
});

//Problem:  If the database query fails (e.g., due to a network error or database downtime) or throws an error, this code doesn't handle it gracefully.  It will crash the server, resulting in a 500 Internal Server Error, which isn't informative.

//Another common error is inconsistent error handling across routes, leading to a confusing user experience.