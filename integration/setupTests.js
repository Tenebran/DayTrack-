const fs = require('fs');
const path = require('path');
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

      // Создание директории new_snapshots, если она еще не существует
      const newSnapshotDir = path.join(__dirname, 'integration/new_snapshots');
      if (!fs.existsSync(newSnapshotDir)) {
        fs.mkdirSync(newSnapshotDir, { recursive: true });
      }

      // Сохранение нового скриншота в директории new_snapshots
      const testName = this.currentTestName.replace(/\s+/g, '_'); // Замена пробелов для корректного имени файла
      const newSnapshotPath = path.join(newSnapshotDir, `${testName}.png`);
      fs.writeFileSync(newSnapshotPath, received);
    }

    return result;
  }
});
