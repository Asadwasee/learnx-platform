import { useState } from 'react';
import { FaBookOpen, FaClock, FaPlay, FaStar } from 'react-icons/fa';
import ProgressBar from './ProgressBar';

const courses = [
  {
    id: 1,
    title: 'Complete React Developer Bootcamp',
    instructor: 'Sarah Chen',
    category: 'Web Dev',
    progress: 72,
    totalLessons: 48,
    completedLessons: 35,
    duration: '24h 30m',
    rating: 4.9,
    color: 'from-sky-500 to-blue-600',
    accent: 'from-sky-500/15 to-blue-600/15',
    lastLesson: 'React Hooks Deep Dive',
    badge: 'In Progress',
    badgeColor: 'bg-sky-500/15 text-sky-600 [html[data-theme="dark"]_&]:text-sky-300',
  },
  {
    id: 2,
    title: 'Machine Learning with Python',
    instructor: 'Dr. Ali Hassan',
    category: 'AI',
    progress: 38,
    totalLessons: 60,
    completedLessons: 23,
    duration: '36h 15m',
    rating: 4.8,
    color: 'from-violet-500 to-purple-600',
    accent: 'from-violet-500/15 to-purple-600/15',
    lastLesson: 'Linear Regression Basics',
    badge: 'In Progress',
    badgeColor: 'bg-violet-500/15 text-violet-600 [html[data-theme="dark"]_&]:text-violet-300',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Mia Tanaka',
    category: 'Design',
    progress: 100,
    totalLessons: 32,
    completedLessons: 32,
    duration: '18h 45m',
    rating: 4.7,
    color: 'from-emerald-500 to-teal-600',
    accent: 'from-emerald-500/15 to-teal-600/15',
    lastLesson: 'Final Project Walkthrough',
    badge: 'Completed',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 [html[data-theme="dark"]_&]:text-emerald-300',
  },
  {
    id: 4,
    title: 'Advanced JavaScript Patterns',
    instructor: 'James O\'Brien',
    category: 'Web Dev',
    progress: 15,
    totalLessons: 40,
    completedLessons: 6,
    duration: '20h 00m',
    rating: 4.6,
    color: 'from-orange-400 to-rose-500',
    accent: 'from-orange-400/15 to-rose-500/15',
    lastLesson: 'Module Pattern & Closures',
    badge: 'Just Started',
    badgeColor: 'bg-orange-400/15 text-orange-600 [html[data-theme="dark"]_&]:text-orange-300',
  },
];

const categoryColors = {
  'Web Dev': 'bg-sky-400/15 text-sky-600 [html[data-theme="dark"]_&]:text-sky-300',
  AI: 'bg-violet-400/15 text-violet-600 [html[data-theme="dark"]_&]:text-violet-300',
  Design: 'bg-emerald-400/15 text-emerald-600 [html[data-theme="dark"]_&]:text-emerald-300',
};

const EnrolledCourses = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'In Progress', 'Completed', 'Just Started'];

  const filtered =
    filter === 'All' ? courses : courses.filter((c) => c.badge === filter);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">My Courses</h2>
          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            {courses.length} courses enrolled · Keep the momentum going!
          </p>
        </div>
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition duration-200
                ${filter === f
                  ? 'bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-md shadow-sky-500/25'
                  : 'border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Course cards grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((course) => (
          <div
            key={course.id}
            className="group rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-card)]"
          >
            {/* Top gradient strip */}
            <div className={`h-1.5 w-full rounded-t-[1.75rem] bg-linear-to-r ${course.color}`} />

            <div className="p-5 space-y-4">
              {/* Badges row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wide ${categoryColors[course.category]}`}>
                  {course.category}
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wide ${course.badgeColor}`}>
                  {course.badge}
                </span>
              </div>

              {/* Title + instructor */}
              <div>
                <h3 className="font-semibold leading-snug text-[color:var(--text-primary)] line-clamp-2">
                  {course.title}
                </h3>
                <p className="mt-1 text-xs text-[color:var(--text-muted)]">by {course.instructor}</p>
              </div>

              {/* Progress bar */}
              <ProgressBar value={course.progress} color={course.color} size="md" />

              {/* Stats row */}
              <div className="flex items-center gap-4 text-xs text-[color:var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <FaBookOpen className="text-[color:var(--accent-primary)]" />
                  {course.completedLessons}/{course.totalLessons} lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-[color:var(--accent-secondary)]" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaStar className="text-amber-400" />
                  {course.rating}
                </span>
              </div>

              {/* Last lesson */}
              <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-4 py-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                  Last watched
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-[color:var(--text-primary)]">
                  {course.lastLesson}
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r ${course.color} px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <FaPlay className="text-xs" />
                {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrolledCourses;