#!/bin/bash

echo "🚀 Запуск ECount Clone - Облачной ERP-системы"
echo "=============================================="

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Пожалуйста, установите Node.js 18+ и попробуйте снова."
    exit 1
fi

# Проверка версии Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Требуется Node.js версии 18 или выше. Текущая версия: $(node -v)"
    exit 1
fi

echo "✅ Node.js версия: $(node -v)"

# Проверка наличия npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm не установлен."
    exit 1
fi

echo "✅ npm версия: $(npm -v)"

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install

# Проверка наличия .env файла
if [ ! -f .env ]; then
    echo "⚠️  Файл .env не найден. Создаю из .env.example..."
    cp .env.example .env
    echo "📝 Пожалуйста, отредактируйте файл .env и настройте подключение к базе данных"
    echo "   Особенно важно настроить DATABASE_URL для PostgreSQL"
fi

# Проверка наличия PostgreSQL
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL не установлен."
    echo "   Для полной функциональности установите PostgreSQL:"
    echo "   Ubuntu/Debian: sudo apt install postgresql postgresql-contrib"
    echo "   macOS: brew install postgresql"
    echo "   Windows: https://www.postgresql.org/download/windows/"
    echo ""
    echo "   После установки PostgreSQL выполните:"
    echo "   npx prisma migrate dev"
    echo "   npx prisma generate"
fi

echo ""
echo "🎉 Установка завершена!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Настройте базу данных PostgreSQL"
echo "2. Отредактируйте файл .env с правильными настройками БД"
echo "3. Выполните миграции: npx prisma migrate dev"
echo "4. Запустите приложение: npm run dev"
echo ""
echo "🌐 После запуска приложение будет доступно по адресу: http://localhost:3000"
echo ""
echo "🔑 Тестовые данные для входа:"
echo "   Email: admin@example.com"
echo "   Пароль: admin123"
echo ""
echo "Для запуска приложения выполните: npm run dev"
