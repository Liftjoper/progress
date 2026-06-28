# Индикатор прогресса для Code Basics

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Liftjoper/progress)
[![Made with](https://img.shields.io/badge/Made_with-❤️-ff69b4?style=for-the-badge)](https://github.com/hexlet-basics/hexlet-basics#)

---

## 📖 О проекте

**Code Basics** — это бесплатная образовательная платформа для изучения программирования с нуля, разработанная сообществом Хекслет. Пользователи проходят текстовые курсы с практическими заданиями в браузере.

В рамках производственной практики был разработан **визуальный индикатор прогресса** для страницы курса. Индикатор помогает студентам отслеживать свой прогресс и мотивирует их завершить обучение.

### Что показывает индикатор:
- ✅ Количество пройденных уроков из общего числа
- 📊 Процент завершения курса
- 📈 Визуальный прогресс-бар
- 🎉 Сообщение "Курс пройден полностью!" при 100%

---

## 📹 Демонстрация работы

файл gif

## 🛠 Стек технологий

| Компонент | Технология |
| :--- | :--- |
| **Backend** | Ruby on Rails 8.1.3 |
| **Frontend** | React + TypeScript |
| **Связь** | Inertia.js |
| **База данных** | PostgreSQL |
| **Сборка** | Vite |
| **Стили** | Tailwind CSS / Tamarin UI |
| **Аналитика** | Ahoy |

---

## 📁 Структура изменений

### Добавленные/изменённые файлы:

| Файл | Назначение | Ссылка |
| :--- | :--- | :--- |
| `app/models/language/member.rb` | Добавлен метод `progress_percentage` для расчёта прогресса | [Смотреть](https://github.com/Liftjoper/progress/blob/main/app/models/language/member.rb) |
| `app/javascript/types/language.ts` | Добавлены TypeScript-типы для данных прогресса | [Смотреть](https://github.com/Liftjoper/progress/blob/main/app/javascript/types/language.ts) |
| `app/javascript/pages/web/languages/show.tsx` | Добавлен React-компонент индикатора прогресса | [Смотреть](https://github.com/Liftjoper/progress/blob/main/app/javascript/pages/web/languages/show.tsx) |

### Ключевые изменения в коде:

#### 1. Модель `Language::Member` (расчёт прогресса)
```ruby
def progress_percentage
  total_lessons = language.lessons.count
  return 0 if total_lessons.zero?
  (finished_lessons_count.to_f / total_lessons * 100).round
end
```

#### 2. React-компонент `ProgressSection` (отображение)
```tsx
const ProgressSection = ({ member, totalLessons }) => {
  const completed = member?.finished_lessons_count || 0;
  const progress = totalLessons > 0 ? (completed / totalLessons) * 100 : 0;
  
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          {Math.round(progress)}%
        </div>
      </div>
      <p>Пройдено {completed} из {totalLessons} уроков</p>
    </div>
  );
};
```

#### 3. TypeScript-типы
```typescript
export interface LanguageMember {
  id: number;
  user_id: number;
  language_id: number;
  finished_lessons_count: number;
  state: "started" | "finished";
  lesson_members?: LanguageLessonMember[];
}
```

---

## 🚀 Как запустить локально

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/Liftjoper/progress.git
cd progress

# 2. Установите зависимости
bundle install
yarn install

# 3. Настройте базу данных
rails db:create
rails db:migrate
rails db:seed

# 4. Запустите сервер
rails server
```

Откройте в браузере: `http://localhost:3000`

---

## 🌐 Деплой

Работающий сайт: **[https://code-basics.com/ru](https://code-basics.com/ru)**

---

## 📊 Результаты внедрения

| До внедрения | После внедрения |
| :--- | :--- |
| ❌ Пользователь не видел свой прогресс | ✅ Пользователь видит точное количество пройденных уроков |
| ❌ Не было мотивации завершать курсы | ✅ Визуальный прогресс-бар показывает процент завершения |
| ❌ Непонятно, сколько осталось пройти | ✅ Сообщение о завершении курса при 100% прогрессе |

---

## 🔗 Полезные ссылки

| Ресурс | Ссылка |
| :--- | :--- |
| **Оригинальный проект** | [hexlet-basics/hexlet-basics](https://github.com/hexlet-basics/hexlet-basics) |
| **Репозиторий** | [Liftjoper/progress](https://github.com/Liftjoper/progress) |
| **Сайт** | [Code Basics](https://code-basics.com/ru) |

---

## 👨‍💻 Автор

**Стародубцев Александр Сергеевич**  
Группа: 01-24 ИСИП.ОД.11  
Колледж: АНПОО «Хекслет колледж»  
