import { Head, Link } from "@inertiajs/react";

// Импортируем типы из созданного файла
import type { Language, LanguageMember } from "../../../types/language";

type Props = {
  course: Language;
  courseMember?: LanguageMember;
};

// ============================================================
// КОМПОНЕНТ ИНДИКАТОРА ПРОГРЕССА
// ============================================================
const ProgressSection = ({
  member,
  totalLessons,
}: {
  member: LanguageMember;
  totalLessons: number;
}) => {
  const completed = member?.finished_lessons_count || 0;
  const progress =
    totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const isFinished = member?.state === "finished";

  return (
    <div style={{
      margin: "20px 0",
      padding: "15px 20px",
      background: "#f8f9fa",
      borderRadius: "10px",
      border: "1px solid #e9ecef"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px"
      }}>
        <span style={{ fontWeight: 600, fontSize: "14px" }}>
          Ваш прогресс
        </span>
        <span style={{ fontSize: "14px", color: "#6c757d" }}>
          {completed} из {totalLessons} уроков
        </span>
      </div>
      <div style={{
        width: "100%",
        height: "24px",
        backgroundColor: "#e9ecef",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: isFinished ? "#2b8a3e" : "#4CAF50",
          background: isFinished
            ? "linear-gradient(90deg, #2b8a3e, #51cf66)"
            : "linear-gradient(90deg, #4CAF50, #8BC34A)",
          borderRadius: "12px",
          transition: "width 0.5s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "12px",
          fontWeight: 600,
          minWidth: "30px",
        }}>
          {progress > 0 && `${progress}%`}
        </div>
      </div>
      {isFinished && (
        <div style={{
          marginTop: "8px",
          color: "green",
          fontWeight: 600,
          textAlign: "center",
          fontSize: "12px"
        }}>
          🎉 Курс пройден полностью!
        </div>
      )}
    </div>
  );
};
// ============================================================

export default function LanguageShow({ course, courseMember }: Props) {
  // Получаем уроки из модулей или напрямую
  const modules = course.modules || [];
  const lessons = modules.flatMap((module) => module.lessons || []) || course.lessons || [];
  const totalLessons = lessons.length;
  const hasProgress = courseMember && totalLessons > 0;

  return (
    <>
      <Head title={course.name} />

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Заголовок */}
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{course.name}</h1>
        {course.description && (
          <p style={{ color: "#6c757d", fontSize: "18px" }}>
            {course.description}
          </p>
        )}

        {/* ============================================================ */}
        {/* ИНДИКАТОР ПРОГРЕССА */}
        {/* ============================================================ */}
        {hasProgress && (
          <ProgressSection member={courseMember} totalLessons={totalLessons} />
        )}
        {/* ============================================================ */}

        {/* Модули и уроки */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
            Уроки
          </h2>

          {modules.map((module) => (
            <div
              key={module.id}
              style={{
                border: "1px solid #e9ecef",
                padding: "16px",
                marginBottom: "16px",
                borderRadius: "8px"
              }}
            >
              <h3 style={{ fontWeight: 600 }}>{module.name}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {(module.lessons || []).map((lesson) => {
                  // Проверяем, пройден ли урок
                  const isCompleted = courseMember?.lesson_members?.some(
                    (lm) => lm.lesson_id === lesson.id && lm.state === "finished"
                  );

                  return (
                    <li key={lesson.id} style={{ padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <Link
                        href={`/languages/${course.slug}/lessons/${lesson.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <span style={{ color: "#007bff" }}>
                          {lesson.name}
                        </span>
                      </Link>
                      {isCompleted && (
                        <span style={{ color: "green", fontSize: "12px", marginLeft: "8px" }}>
                          ✅ Пройдено
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}