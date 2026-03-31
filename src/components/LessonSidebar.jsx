import React from "react";

const LessonSidebar = ({ lessons, currentLesson, setCurrentLesson }) => {
  return (
<main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> <h2 className="font-bold mb-4 text-white">Lessons</h2>

      <ul className="space-y-2">
        {lessons.map((lesson, index) => (
          <li
            key={index}
            onClick={() => setCurrentLesson(index)}
            className={`p-2 rounded cursor-pointer transition ${
              currentLesson === index
                ? "bg-blue-500 text-white"
                : "text-gray-300 hover:bg-slate-700"
            }`}
          >
            {lesson}
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
};

export default LessonSidebar;