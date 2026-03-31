import React from "react";
import CourseAccordion from "../components/CourseAccordion";
import video from "../assets/video.mp4";
const CourseDetailPage = () => {
  const sections = [
    { title: "Introduction", lessons: ["Welcome", "Setup"] },
    { title: "Advanced", lessons: ["Hooks", "Routing"] }
  ];

  return (
   <main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

  <h1 className="text-3xl font-bold mb-6">Course Detail</h1>

<div className="rounded-xl overflow-hidden border border-(--border-soft) bg-(--surface-soft) mb-6">
  <video
    className="w-full h-[300px] md:h-[420px] object-cover"
    controls
  >
    <source src={video} type="video/mp4" />
  </video>
</div>

  {/* Description */}
  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
    Learn modern web development with hands-on projects and real-world examples.
  </p>

  <CourseAccordion sections={sections} />

  <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transition">
    Enroll Now
  </button>
</div>
</main>
  );
};

export default CourseDetailPage;