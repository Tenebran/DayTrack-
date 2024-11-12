# Указываем базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы проекта
COPY . .

# Указываем команду по умолчанию для запуска приложения
CMD ["npm", "start"]
