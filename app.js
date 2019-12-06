const express = require("express");
const app = express();

const port = 8080;

// Starting the server
app.listen(port, () => {
  console.log("Listening on port 8080...");
});

// Creating API
app.get("/api/hello_world", (req, res) => {
  res.send("Hello world");
});
