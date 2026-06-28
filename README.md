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

#### 1. Модель `Language::Member`
```ruby
def progress_percentage
  total_lessons = language.lessons.count
  return 0 if total_lessons.zero?
  (finished_lessons_count.to_f / total_lessons * 100).round
end
