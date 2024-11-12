jest.setTimeout(120000);

describe('app', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?args=&globals=&id=todolists-app--app-storie&viewMode=story');
    await page.waitForTimeout(5000); 
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe('appDarkTheme', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?args=&globals=&id=todolists-app--app-dark-theme-storie&viewMode=story');
    await page.waitForTimeout(5000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});


