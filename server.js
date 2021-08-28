// Import npm packages
const express = require("express");

// Declare express object => app
const app = express();

// BodyParser middleware
app.use(express.json());

// Use Routes
app.use('/', require("./routes/urlProvider"));

// App listen on PORT 4000
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));