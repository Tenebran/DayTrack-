const fs = require('fs');
const path = require('path');

// Папка с переводами
const translationsDir = path.resolve(__dirname, 'src', 'translations');
// Основной язык (например, английский)
const baseLanguage = 'en';
// Путь к основному файлу переводов
const baseFilePath = path.join(translationsDir, baseLanguage, `${baseLanguage}.json`);

// Проверяем, существует ли основной файл переводов
if (!fs.existsSync(baseFilePath)) {
  console.error(`Base language file not found: ${baseFilePath}`);
  process.exit(1);
}

// Читаем основной файл переводов
const baseTranslations = JSON.parse(fs.readFileSync(baseFilePath, 'utf8'));

// Функция для копирования ключей из основного языка
function copyTranslationKeys(source, target = {}) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      target[key] = copyTranslationKeys(source[key], target[key]);
    } else {
      if (!target[key]) {
        target[key] = ''; // Заполняем пустые значения
      }
    }
  }
  return target;
}

// Проверяем только папки, которые действительно являются языками
fs.readdirSync(translationsDir).forEach((lang) => {
  const langDir = path.join(translationsDir, lang);
  const langFilePath = path.join(langDir, `${lang}.json`);

  // Пропускаем не папки или если это не языковая папка
  if (!fs.statSync(langDir).isDirectory()) return;
  if (!langFilePath.endsWith(`${lang}.json`)) return;

  // Если файл пуст или не существует, создаём его
  if (!fs.existsSync(langFilePath)) {
    fs.writeFileSync(langFilePath, JSON.stringify({}, null, 2), 'utf8');
  }

  // Читаем содержимое файла
  let existingTranslations;
  try {
    const fileContent = fs.readFileSync(langFilePath, 'utf8');
    existingTranslations = fileContent.trim() ? JSON.parse(fileContent) : {};
  } catch (error) {
    console.error(`Error reading or parsing ${langFilePath}:`, error.message);
    existingTranslations = {};
  }

  // Копируем ключи из основного языка
  const updatedTranslations = copyTranslationKeys(baseTranslations, existingTranslations);

  // Записываем обновлённые переводы в файл
  fs.writeFileSync(langFilePath, JSON.stringify(updatedTranslations, null, 2), 'utf8');
  console.log(`Updated translations for ${lang}`);
});

console.log('All translations have been updated successfully.');
