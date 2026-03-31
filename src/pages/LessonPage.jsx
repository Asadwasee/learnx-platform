import React, { useState } from "react";
import LessonSidebar from "../components/LessonSidebar";
import LessonVideoPlayer from "../components/LessonVideoPlayer";

const lessons = ["Introduction", "Setup", "Project", "Advanced"];

const LessonPage = () => {
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <LessonSidebar
        lessons={lessons}
        currentLesson={currentLesson}
        setCurrentLesson={setCurrentLesson}
      />

      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">
          {lessons[currentLesson]}
        </h1>

        <LessonVideoPlayer videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />

        <div className="mt-6 flex justify-between">
          <button
            disabled={currentLesson === 0}
            onClick={() => setCurrentLesson(currentLesson - 1)}
            className="px-4 py-2 rounded bg-(--surface-soft)"
          >
            Previous
          </button>

          <button
            disabled={currentLesson === lessons.length - 1}
            onClick={() => setCurrentLesson(currentLesson + 1)}
            className="px-4 py-2 rounded bg-linear-to-r from-sky-500 to-emerald-500 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </main>
  );
};

export default LessonPage;