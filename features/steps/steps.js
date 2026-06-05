const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

/* LOGIN */

Given("I open the login page", async function () {
  await this.page.goto("https://www.saucedemo.com");
});

When("I login with valid credentials", async function () {
  await this.page.type("#user-name", "standard_user");
  await this.page.type("#password", "secret_sauce");
  await this.page.click("#login-button");

  await this.page.waitForSelector(".inventory_list", { timeout: 15000 });
});

Then("I should see the products page", async function () {
  assert(this.page.url().includes("inventory"));
});

/* REUSED LOGIN */

Given("I am logged in", async function () {
  await this.page.goto("https://www.saucedemo.com");

  await this.page.type("#user-name", "standard_user");
  await this.page.type("#password", "secret_sauce");
  await this.page.click("#login-button");

  await this.page.waitForSelector(".inventory_list", { timeout: 15000 });
});

/* CART */

When("I add an item to cart", async function () {
  await this.page.waitForSelector("[data-test^='add-to-cart']", { timeout: 15000 });

  await this.page.click("[data-test^='add-to-cart']");
});

Then("cart should show 1 item", async function () {
  // wait for badge instead of cart page (much more reliable)
  await this.page.waitForSelector(".shopping_cart_badge", { timeout: 15000 });

  const text = await this.page.$eval(
    ".shopping_cart_badge",
    el => el.textContent
  );

  assert.strictEqual(text.trim(), "1");
});

/* MENU */

When("I open the menu", async function () {
  await this.page.click("#react-burger-menu-btn");
  await this.page.waitForSelector(".bm-menu", { timeout: 15000 });
});

Then("menu should be visible", async function () {
  const menu = await this.page.$(".bm-menu");
  assert.ok(menu);
});