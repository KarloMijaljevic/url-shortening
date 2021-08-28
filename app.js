// Import npm packages
const express = require("express");

// Declare express object => app
const app = express();

// BodyParser middleware
app.use(express.json());

// Use Routes
app.use('/', require("./routes/urlProvider"));

module.exports = app;