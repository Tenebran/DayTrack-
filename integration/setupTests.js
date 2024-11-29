const fs = require("fs");
const path = require("path");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({
  toMatchImageSnapshot(received, ...args) {
    const testName = this.currentTestName
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, "")
      .toLowerCase();
    const testFileName = path
      .basename(this.testPath, ".js")
      .replace(/\./g, "-");

    const snapshotIdentifier = `${testFileName}-${testName}-1-snap`;

    const customSnapshotsDir = path.resolve(__dirname, "__image_snapshots__");
    const customDiffDir = path.resolve(customSnapshotsDir, "__diff_output__");

    const result = toMatchImageSnapshot.call(this, received, {
      customSnapshotsDir,
      customDiffDir,
      customSnapshotIdentifier: snapshotIdentifier,
      failureThreshold: 0.01,
      failureThresholdType: "percent",
      ...args,
    });

    if (!result.pass) {
      console.log(
        "Snapshot does not match. Creating a new screenshot for comparison.",
      );

      const newSnapshotDir = path.resolve(
        customSnapshotsDir,
        "__corrected_snapshots__",
      );
      const newSnapshotPath = path.join(
        newSnapshotDir,
        `${snapshotIdentifier}.png`,
      );

      if (!fs.existsSync(newSnapshotDir)) {
        fs.mkdirSync(newSnapshotDir, { recursive: true });
      }

      fs.writeFileSync(newSnapshotPath, received);
      console.log(
        "New screenshot successfully saved at path:",
        newSnapshotPath,
      );
    }

    return result;
  },
});
