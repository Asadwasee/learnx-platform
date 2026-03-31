import React from "react";

const LessonVideoPlayer = ({ videoUrl }) => {
  return (
<main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">      <iframe
        className="w-full h-full"
        src={videoUrl}
        title="Lesson Video"
        allowFullScreen
      ></iframe>
    </div>
    </main>
  );
};

export default LessonVideoPlayer;