const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/", (rea, res) => {
  const info = os.hostname();
  res.send(`${os.hostname()} : received GET on /`);
});

app.listen(3000);
