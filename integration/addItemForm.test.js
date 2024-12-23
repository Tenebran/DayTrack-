jest.setTimeout(120000);

describe("addItemForm", () => {
  it("base example, visually looks correct", async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(
      "http://localhost:9009/iframe.html?id=todolists-additemform--add-item-form-storie&viewMode=story",
    );
    await page.waitForTimeout(5000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe("AddItemFormDarkTheme", () => {
  it("base example, visually looks correct", async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(
      "http://localhost:9009/iframe.html?args=&globals=&id=todolists-additemform--app-dark-theme-storie&viewMode=story",
    );
    await page.waitForTimeout(5000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe("errorAddItemForm", () => {
  it("base example, visually looks correct", async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(
      "http://localhost:9009/iframe.html?args=&globals=&id=todolists-additemform--add-item-form-error-long-stories&viewMode=story",
    );
    await page.waitForTimeout(5000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe("errorAddItemFormDarkTheme", () => {
  it("base example, visually looks correct", async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(
      "http://localhost:9009/iframe.html?args=&globals=&id=todolists-additemform--add-item-form-error-long-stories&viewMode=story",
    );
    await page.waitForTimeout(5000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
