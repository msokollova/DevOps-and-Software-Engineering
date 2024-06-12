const { test, expect } = require('@playwright/test');

test('Verify "All Books" link is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const allBookLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBookLink.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify "Login" button is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();

    expect(isLoginButtonVisible).toBe(true);
});

test('Verify "Register" button is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();

    expect(isRegisterButtonVisible).toBe(true);
});

test('Verify "All Books" link is visible after user login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'john@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const allBookLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBookLink.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify "My Books" link is visible after user login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'john@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const myBookLink = await page.$('a[href="/profile"]');
    const isLinkVisible = await myBookLink.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify "Add Books" link is visible after user login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'john@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const addBookLink = await page.$('a[href="/create"]');
    const isLinkVisible = await addBookLink.isVisible();

    expect(isLinkVisible).toBe(true);
});

test('Verify user"s email is visible after user login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'john@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const userEmail = await page.$('div#user > span');
    const isLinkVisible = await userEmail.isVisible();

    expect(isLinkVisible).toBe(true);
});

