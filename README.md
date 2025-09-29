# ECount Clone - Облачная ERP-система

Копия популярной ERP-системы ecount.com для управления бизнесом.

## Возможности

- 🔐 **Аутентификация и авторизация** - Безопасный вход и регистрация
- 📊 **Панель управления** - Обзор ключевых метрик и статистики
- 🛒 **Управление продажами** - Создание и отслеживание продаж
- 📦 **Управление закупками** - Контроль поставщиков и заказов
- 📋 **Управление инвентарем** - Отслеживание остатков товаров
- 👥 **Управление клиентами** - База клиентов и история взаимодействий
- 📈 **Аналитика и отчеты** - Детальная аналитика по бизнесу
- 💰 **Финансовый учет** - Учет доходов и расходов

## Технологии

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **База данных**: PostgreSQL
- **Аутентификация**: JWT токены
- **Иконки**: Lucide React

## Установка и запуск

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd ecount-clone
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка базы данных

Создайте файл `.env` в корне проекта:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/ecount_clone?schema=public"
JWT_SECRET="your-super-secret-jwt-key-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"
```

### 4. Настройка PostgreSQL

Установите PostgreSQL и создайте базу данных:
```bash
# Установка PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Создание базы данных
sudo -u postgres psql
CREATE DATABASE ecount_clone;
CREATE USER ecount_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ecount_clone TO ecount_user;
\q
```

### 5. Миграция базы данных
```bash
npx prisma migrate dev
npx prisma generate
```

### 6. Запуск приложения
```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## Структура проекта

```
ecount-clone/
├── src/
│   ├── app/
│   │   ├── api/           # API маршруты
│   │   ├── dashboard/     # Панель управления
│   │   ├── login/         # Страница входа
│   │   ├── register/      # Страница регистрации
│   │   └── page.tsx       # Главная страница
│   └── components/        # React компоненты
├── prisma/
│   └── schema.prisma      # Схема базы данных
├── public/                # Статические файлы
└── README.md
```

## Основные команды

```bash
# Разработка
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен версии
npm run lint         # Проверка кода

# База данных
npx prisma studio    # Открыть Prisma Studio
npx prisma migrate dev    # Создать миграцию
npx prisma generate       # Генерировать Prisma Client
npx prisma db push        # Отправить изменения в БД
```

## Тестовые данные

Для входа в систему используйте:
- **Email**: admin@example.com
- **Пароль**: admin123

## Развертывание

### Vercel (рекомендуется)
1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения в настройках проекта
3. Настройте PostgreSQL базу данных (например, через Neon, Supabase или Railway)

### Docker
```bash
# Создание Dockerfile
docker build -t ecount-clone .
docker run -p 3000:3000 ecount-clone
```

## Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## Лицензия

Этот проект создан в образовательных целях. Все права на оригинальный ecount.com принадлежат их владельцам.

## Поддержка

Если у вас есть вопросы или предложения, создайте issue в репозитории.