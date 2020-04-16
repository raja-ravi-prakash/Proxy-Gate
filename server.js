const ex = require("express");
const app = ex();
const data = require("./payload.json");

app.get("/", (req, res) => {
  res.sendFile(data.client.custom.source, { root: __dirname });
});

app.listen(data.client.port, data.client.domain, function () {
  let info =
    "Running Proxy : https://" + data.client.domain + ":" + data.client.port;
  console.log(info);
});
