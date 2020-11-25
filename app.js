var express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there</h2>");
});

app.listen(3112, console.log(`Listening on http://localhost:3112`));
