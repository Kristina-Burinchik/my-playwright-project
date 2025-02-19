const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.rw.by/", { timeout: 60000 });
  const title = await page.title();
  console.log(title);
  await browser.close();
})();
