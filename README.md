# Unhandled Errors in Express.js Route Handlers

This repository demonstrates a common issue in Express.js applications: unhandled errors in route handlers.  The `bug.js` file shows an example of a route that doesn't handle potential errors from a database query.  This can lead to application crashes and unhelpful 500 Internal Server Errors for users.

The `bugSolution.js` file provides a solution using try...catch blocks and centralized error handling to gracefully handle these errors.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `node bug.js` (or `node bugSolution.js`).
4. Try accessing a route that triggers an error (simulated in this example).
5. Observe the server response (or lack thereof, in the case of the unhandled error).

## Solution

The solution involves using try...catch blocks to handle potential errors within route handlers and a centralized error handling middleware to provide consistent error responses.