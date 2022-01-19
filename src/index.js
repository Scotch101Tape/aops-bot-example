const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Sign in
  await page.goto("https://artofproblemsolving.com/community/c1h2758890_cats_of_the_clans_reboot_to_the_reboot");
  await page.click("#header-login")
  await page.type(process.env.USERNAME);
  await page.screenshot({
    path: "./example.png"
  })
  //page.type()


  await browser.close();
})();