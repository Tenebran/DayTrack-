jest.setTimeout(45000);

describe('taskIsDoneLight', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?globals=&args=&id=todolists-task--tasks-is-done-storie&viewMode=story');
    await page.waitForTimeout(3000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe('taskIsDoneDark', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?globals=&args=&id=todolists-task--tasks-is-done-dark-theme-storie&viewMode=story');
    await page.waitForTimeout(3000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});


describe('taskIsNotDoneLight', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?globals=&args=&id=todolists-task--tasks-is-not-done-storie&viewMode=story');
    await page.waitForTimeout(3000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});


describe('taskIsNotDoneDark', () => {
  it('base example, visually looks correct', async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:9009/iframe.html?globals=&args=&id=todolists-task--tasks-is-not-done-dark-theme-storie&viewMode=story');
    await page.waitForTimeout(3000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

