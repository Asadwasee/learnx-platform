import React, { useState } from "react";

const CourseAccordion = ({ sections }) => {
  const [open, setOpen] = useState(null);

  return (
    <main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {sections.map((sec, i) => (
        <div key={i} className="mb-3 rounded-2xl border border-(--border-soft) bg-(--surface-card)">

          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-(--text-primary)"
          >
            {sec.title}
            <span>{open === i ? "-" : "+"}</span>
          </button>

          {open === i && (
            <ul className="px-4 pb-4 text-(--text-secondary) space-y-2">
              {sec.lessons.map((l, j) => (
                <li key={j}>▶ {l}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    </main>
  );
};

export default CourseAccordion;