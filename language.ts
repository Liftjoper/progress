// app/javascript/types/language.ts

export interface LanguageMember {
  id: number;
  user_id: number;
  language_id: number;
  finished_lessons_count: number;
  state: "started" | "finished";
  created_at: string;
  updated_at: string;
  lesson_members?: LanguageLessonMember[];
}

export interface LanguageLessonMember {
  id: number;
  lesson_id: number;
  language_member_id: number;
  state: "started" | "finished";
  created_at: string;
  updated_at: string;
}

export interface LanguageLesson {
  id: number;
  name: string;
  slug: string;
  position: number;
  description?: string;
}

export interface LanguageModule {
  id: number;
  name: string;
  position: number;
  lessons: LanguageLesson[];
}

export interface Language {
  id: number;
  name: string;
  slug: string;
  description?: string;
  position?: number;
  modules?: LanguageModule[];
  lessons?: LanguageLesson[];
}

export interface LanguageCategory {
  id: number;
  name: string;
  slug: string;
  position: number;
}