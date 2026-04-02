import { useState, useMemo } from 'react';
import { FaStar, FaClock, FaUser, FaFilter } from 'react-icons/fa';

// ─── Course Data ──────────────────────────────────────────────────────────────

const coursesData = [
  {
    id: 1,
    title: 'Complete React Developer Bootcamp',
    instructor: 'Sarah Chen',
    duration: '40 hours',
    rating: 4.9,
    reviews: 2341,
    level: 'Intermediate',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    price: '$79',
    students: 12500,
    description: 'Master React with real-world projects and modern hooks patterns.',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Fundamentals',
    instructor: 'Dr. Ahmed Khan',
    duration: '36 hours',
    rating: 4.8,
    reviews: 1856,
    level: 'Intermediate',
    category: 'AI & Machine Learning',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    price: '$89',
    students: 8900,
    description: 'Start your AI journey with Python, TensorFlow, and practical ML projects.',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Emma Rodriguez',
    duration: '32 hours',
    rating: 4.95,
    reviews: 1243,
    level: 'Beginner',
    category: 'UI/UX Design',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    price: '$69',
    students: 6200,
    description: 'Learn design principles, Figma, and create stunning user experiences.',
  },
  {
    id: 4,
    title: 'Full-Stack JavaScript Development',
    instructor: 'Marcus Johnson',
    duration: '48 hours',
    rating: 4.87,
    reviews: 3012,
    level: 'Intermediate',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
    price: '$84',
    students: 15000,
    description: 'Build complete web applications with Node.js, Express, and React.',
  },
  {
    id: 5,
    title: 'Python for Data Science',
    instructor: 'Priya Sharma',
    duration: '44 hours',
    rating: 4.92,
    reviews: 2156,
    level: 'Advanced',
    category: 'AI & Machine Learning',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    price: '$79',
    students: 9800,
    description: 'Advanced data analysis, visualization, and statistical modeling with Python.',
  },
  {
    id: 6,
    title: 'Web Design Fundamentals',
    instructor: 'Jessica Lee',
    duration: '24 hours',
    rating: 4.8,
    reviews: 1678,
    level: 'Beginner',
    category: 'UI/UX Design',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
    price: '$49',
    students: 11200,
    description: 'Learn the fundamentals of web design, color theory, and typography.',
  },
  {
    id: 7,
    title: 'Advanced TypeScript Patterns',
    instructor: 'David Miller',
    duration: '28 hours',
    rating: 4.91,
    reviews: 892,
    level: 'Advanced',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    price: '$74',
    students: 4500,
    description: 'Master advanced TypeScript patterns and type system features.',
  },
  {
    id: 8,
    title: 'Deep Learning with TensorFlow',
    instructor: 'Dr. Ahmed Khan',
    duration: '52 hours',
    rating: 4.85,
    reviews: 1234,
    level: 'Advanced',
    category: 'AI & Machine Learning',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    price: '$99',
    students: 5600,
    description: 'Build neural networks and deep learning models with TensorFlow and Keras.',
  },
  {
    id: 9,
    title: 'HTML & CSS Essentials',
    instructor: 'Tom Wilson',
    duration: '20 hours',
    rating: 4.9,
    reviews: 3456,
    level: 'Beginner',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&auto=format&fit=crop&q=60',
    price: '$39',
    students: 28900,
    description: 'Learn HTML5 and CSS3 from scratch with modern best practices.',
  },
  {
    id: 10,
    title: 'Mobile UI/UX Design',
    instructor: 'Emma Rodriguez',
    duration: '30 hours',
    rating: 4.88,
    reviews: 1567,
    level: 'Intermediate',
    category: 'UI/UX Design',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60',
    price: '$64',
    students: 7800,
    description: 'Design beautiful mobile apps with responsive layouts and user-centered design.',
  },
  {
    id: 11,
    title: 'Vue.js 3 Complete Guide',
    instructor: 'Lisa Chen',
    duration: '38 hours',
    rating: 4.83,
    reviews: 945,
    level: 'Intermediate',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60',
    price: '$72',
    students: 5200,
    description: 'Master Vue.js 3 with composition API and real-world projects.',
  },
  {
    id: 12,
    title: 'Computer Vision Basics',
    instructor: 'Dr. Ahmed Khan',
    duration: '42 hours',
    rating: 4.86,
    reviews: 734,
    level: 'Advanced',
    category: 'AI & Machine Learning',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    price: '$94',
    students: 3900,
    description: 'Learn image processing and computer vision with OpenCV and Python.',
  },
];

// ─── Shared Styles ────────────────────────────────────────────────────────────

const cardClass =
  'rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] shadow-[var(--shadow-soft)] backdrop-blur-xl';

const badgeClass =
  'inline-flex rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-soft)] px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-primary)]';

// ─── Star Rating Component ────────────────────────────────────────────────────

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < Math.floor(rating)
                ? 'text-yellow-400'
                : 'text-[color:var(--border-soft)]'
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-[color:var(--text-primary)]">
        {rating}
      </span>
      <span className="text-xs text-[color:var(--text-muted)]">
        ({reviews} reviews)
      </span>
    </div>
  );
}

// ─── Course Card Component ────────────────────────────────────────────────────

function CourseCard({ course }) {
  return (
    <div className={`${cardClass} overflow-hidden transition duration-200 hover:-translate-y-2 hover:shadow-[var(--shadow-card)] flex flex-col`}>
      {/* Thumbnail */}
      <div className="relative h-48 bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent)]" />
        {/* Only replaced the div with img tag to show the image link */}
        <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-grow">
        {/* Level Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
              course.level === 'Beginner'
                ? 'bg-emerald-500/20 text-emerald-700'
                : course.level === 'Intermediate'
                  ? 'bg-sky-500/20 text-sky-700'
                  : 'bg-violet-500/20 text-violet-700'
            }`}
          >
            {course.level}
          </span>
          <span className="text-xs text-[color:var(--text-muted)]">
            {course.category}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-[color:var(--text-primary)] line-clamp-2 hover:text-[color:var(--accent-primary)] transition">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)] line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Rating */}
        <div className="border-t border-[color:var(--border-soft)] pt-3">
          <StarRating rating={course.rating} reviews={course.reviews} />
        </div>

        {/* Meta Information */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-[color:var(--text-secondary)]">
            <FaUser className="text-[color:var(--accent-primary)]" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-[color:var(--text-secondary)]">
            <FaClock className="text-[color:var(--accent-primary)]" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-[color:var(--border-soft)] pt-4">
          <span className="text-xl font-bold text-[color:var(--text-primary)]">
            {course.price}
          </span>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-2.5 font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Filter Button Component ──────────────────────────────────────────────────

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 font-semibold transition duration-200 ${
        active
          ? 'bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg'
          : 'border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)]'
      }`}
    >
      {label}
    </button>
  );
}

// ─── Main Courses Page Component ──────────────────────────────────────────────

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique categories
  const categories = [...new Set(coursesData.map((course) => course.category))];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  // Filter courses based on selected filters
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const levelMatch = !selectedLevel || course.level === selectedLevel;
      const categoryMatch =
        !selectedCategory || course.category === selectedCategory;
      return levelMatch && categoryMatch;
    });
  }, [selectedLevel, selectedCategory]);

  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      {/* Header Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-72 rounded-full bg-[color:var(--hero-glow)] blur-3xl sm:h-96 sm:w-96" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={badgeClass}>
               Explore Our Courses
            </div>
            <h1 className="mt-6 text-4xl font-bold text-[color:var(--text-primary)] sm:text-5xl lg:text-6xl">
              Find Your Next
              <span className="bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                {' '}Learning Path
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--text-secondary)]">
              Choose from {coursesData.length}+ expertly-crafted courses designed to help you master in-demand skills.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="space-y-6 sm:space-y-0">
            {/* Level Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaFilter className="text-[color:var(--accent-primary)]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--text-primary)]">
                  Filter by Level
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <FilterButton
                  label="All Levels"
                  active={selectedLevel === null}
                  onClick={() => setSelectedLevel(null)}
                />
                {levels.map((level) => (
                  <FilterButton
                    key={level}
                    label={level}
                    active={selectedLevel === level}
                    onClick={() => setSelectedLevel(level)}
                  />
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaFilter className="text-[color:var(--accent-primary)]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--text-primary)]">
                  Filter by Category
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <FilterButton
                  label="All Categories"
                  active={selectedCategory === null}
                  onClick={() => setSelectedCategory(null)}
                />
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    label={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-10 sm:mt-12">
            <p className="text-sm text-[color:var(--text-muted)]">
              Showing <span className="font-bold text-[color:var(--text-primary)]">{filteredCourses.length}</span> of{' '}
              <span className="font-bold text-[color:var(--text-primary)]">{coursesData.length}</span> courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-lg text-[color:var(--text-muted)]">
                  No courses found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedLevel(null);
                    setSelectedCategory(null);
                  }}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-6 py-3 font-semibold text-[color:var(--text-primary)] transition hover:bg-[color:var(--surface-strong)]"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
