const fs = require("fs");
const path = require("path");

const translationsDir = path.resolve(__dirname, "src", "translations");
const baseLanguage = "en";
const baseFilePath = path.join(
  translationsDir,
  baseLanguage,
  `${baseLanguage}.json`,
);

if (!fs.existsSync(baseFilePath)) {
  console.error(`Base language file not found: ${baseFilePath}`);
  process.exit(1);
}

const baseTranslations = JSON.parse(fs.readFileSync(baseFilePath, "utf8"));

function copyTranslationKeys(source, target = {}) {
  for (const key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      target[key] = copyTranslationKeys(source[key], target[key]);
    } else {
      if (!target[key]) {
        target[key] = "";
      }
    }
  }
  return target;
}

fs.readdirSync(translationsDir).forEach((lang) => {
  const langDir = path.join(translationsDir, lang);
  const langFilePath = path.join(langDir, `${lang}.json`);

  if (!fs.statSync(langDir).isDirectory()) return;
  if (!langFilePath.endsWith(`${lang}.json`)) return;

  if (!fs.existsSync(langFilePath)) {
    fs.writeFileSync(langFilePath, JSON.stringify({}, null, 2), "utf8");
  }

  let existingTranslations;
  try {
    const fileContent = fs.readFileSync(langFilePath, "utf8");
    existingTranslations = fileContent.trim() ? JSON.parse(fileContent) : {};
  } catch (error) {
    console.error(`Error reading or parsing ${langFilePath}:`, error.message);
    existingTranslations = {};
  }

  const updatedTranslations = copyTranslationKeys(
    baseTranslations,
    existingTranslations,
  );

  fs.writeFileSync(
    langFilePath,
    JSON.stringify(updatedTranslations, null, 2),
    "utf8",
  );
  console.log(`Updated translations for ${lang}`);
});

console.log("All translations have been updated successfully.");
