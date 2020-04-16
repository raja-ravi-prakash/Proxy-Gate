const puppeteer = require("puppeteer");
const ex = require("express");
const app = ex();
const data = require("./payload.json");

app.get("/", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://" + data.client.domain + ":" + data.client.port);
    const content = await page.content();
    res.send(content);
    await browser.close();
  })();
});

app.listen(data.proxy.port, data.proxy.domain, function () {
  let info =
    "Running Proxy : https://" + data.proxy.domain + ":" + data.proxy.port;
  console.log(info);
});
