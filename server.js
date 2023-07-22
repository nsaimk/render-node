const express = require("express");
const app = express();

const port = 3009;

app.get("/", (req, res) => {
  res.send({ name: "saim", message: "hello london 10" });
});

app.listen(port);
