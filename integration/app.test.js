const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({
  toMatchImageSnapshot(received, ...args) {
    const result = toMatchImageSnapshot.call(this, received, {
      customSnapshotsDir: './integration/__image_snapshots__',
      customDiffDir: './integration/__image_snapshots__/__diff_output__',
      failureThreshold: 0.01,  
      failureThresholdType: 'percent', 
      ...args,
    });
    if (!result.pass) {
      console.log('Снимок не совпадает. Создание нового скриншота для сравнения.');
    }
    return result;
  }
});


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


