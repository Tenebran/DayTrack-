import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { basename, resolve, join } from 'path';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({
  toMatchImageSnapshot(received, ...args) {
    const testName = this.currentTestName.replace(/\s+/g, '-').replace(/[^a-z0-9-]/gi, '').toLowerCase();
    const testFileName = basename(this.testPath, '.js').replace(/\./g, '-');

    const snapshotIdentifier = `${testFileName}-${testName}-1-snap`; 

    const customSnapshotsDir = resolve(__dirname, '__image_snapshots__');
    const customDiffDir = resolve(customSnapshotsDir, '__diff_output__');

    const result = toMatchImageSnapshot.call(this, received, {
      customSnapshotsDir,
      customDiffDir,
      customSnapshotIdentifier: snapshotIdentifier,
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
      ...args,
    });

    if (!result.pass) {
      console.log('Snapshot does not match. Creating a new screenshot for comparison.');

      const newSnapshotDir = resolve(customSnapshotsDir, '__corrected_snapshots__');
      const newSnapshotPath = join(newSnapshotDir, `${snapshotIdentifier}.png`);

      if (!existsSync(newSnapshotDir)) {
        mkdirSync(newSnapshotDir, { recursive: true });
      }

      writeFileSync(newSnapshotPath, received);
      console.log('New screenshot successfully saved at path:', newSnapshotPath);
    }

    return result;
  }
});
