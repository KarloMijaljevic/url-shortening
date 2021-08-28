// Declare express object => app
const app = require("./app");

// App listen on PORT 4000
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));