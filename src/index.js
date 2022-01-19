require("dotenv").config()

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Sign in
  await page.goto(process.env.AOPS_PM_URL);
  await page.click("#page_error_window>.cmty-login");
  await page.type("#login-username", process.env.AOPS_USERNAME);
  await page.type("#login-password", process.env.AOPS_PASSWORD);
  await page.click("#login-button");
  await page.waitForSelector(".cmty-topic-mini-reply");

  // Type something and send it
  await page.click(".cmty-topic-mini-reply");
  await page.type(".cmty-post-textarea", "This was sent through node.js using the code in github repo [url]https://github.com/Scotch101Tape/aops-bot-example[/url]");
  await page.click(".cmty-submit-button");

  // Close up shop
  await browser.close();
})();