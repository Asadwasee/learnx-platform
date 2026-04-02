import { useState } from 'react';
import {
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaBrain,
  FaCode,
  FaPalette,
  FaQuoteLeft,
  FaBook,
} from 'react-icons/fa';

// ─── Course Data ──────────────────────────────────────────────────────────────

const featuredCourses = [
  {
    id: 1,
    title: 'Complete React Developer Bootcamp',
    description: 'Master React with real-world projects and modern hooks patterns.',
    instructor: 'Sarah Chen',
    rating: 4.9,
    students: 12500,
    price: '$79',
    level: 'Intermediate',
    duration: '40 hours',
    color: 'from-sky-500 to-blue-600',
    icon: FaCode,
  },
  {
    id: 2,
    title: 'AI & Machine Learning Fundamentals',
    description: 'Start your AI journey with Python, TensorFlow, and practical ML projects.',
    instructor: 'Dr. Ahmed Khan',
    rating: 4.8,
    students: 8900,
    price: '$89',
    level: 'Intermediate',
    duration: '36 hours',
    color: 'from-violet-500 to-purple-600',
    icon: FaBrain,
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Learn design principles, Figma, and create stunning user experiences.',
    instructor: 'Emma Rodriguez',
    rating: 4.95,
    students: 6200,
    price: '$69',
    level: 'Beginner',
    duration: '32 hours',
    color: 'from-emerald-500 to-teal-600',
    icon: FaPalette,
  },
  {
    id: 4,
    title: 'Full-Stack JavaScript Development',
    description: 'Build complete web applications with Node.js, Express, and React.',
    instructor: 'Marcus Johnson',
    rating: 4.87,
    students: 15000,
    price: '$84',
    level: 'Intermediate',
    duration: '48 hours',
    color: 'from-orange-400 to-rose-500',
    icon: FaCode,
  },
];

const categories = [
  {
    id: 1,
    name: 'AI & Machine Learning',
    courses: '24 courses',
    icon: FaBrain,
    color: 'from-violet-500/20 to-purple-600/20',
    borderColor: 'border-violet-400/30',
    textColor: 'text-violet-600',
  },
  {
    id: 2,
    name: 'Web Development',
    courses: '48 courses',
    icon: FaCode,
    color: 'from-sky-500/20 to-blue-600/20',
    borderColor: 'border-sky-400/30',
    textColor: 'text-sky-600',
  },
  {
    id: 3,
    name: 'UI/UX Design',
    courses: '18 courses',
    icon: FaPalette,
    color: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-400/30',
    textColor: 'text-emerald-600',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Software Engineer',
    content:
      'LearnX transformed my career. The React course was incredibly thorough and the instructor made everything crystal clear. Highly recommended!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Maria García',
    role: 'Product Designer',
    content:
      'The UI/UX course gave me practical skills I use every day. The project-based learning approach is fantastic and you actually build real things.',
    rating: 5,
    avatar: '👩‍🎨',
  },
  {
    id: 3,
    name: 'James Chen',
    role: 'Data Scientist',
    content:
      'Finally, a platform that explains machine learning concepts in a way that makes sense. Best investment I made in my learning journey.',
    rating: 5,
    avatar: '👨‍🔬',
  },
  {
    id: 4,
    name: 'Sofia Perez',
    role: 'Web Developer',
    content:
      'The Full-Stack course is comprehensive and up-to-date. Landed my first dev job within 3 months of completing the bootcamp.',
    rating: 5,
    avatar: '👩‍💻',
  },
];

const instructors = [
  {
    id: 1,
    name: 'Sarah Chen',
    specialty: 'React & Web Development',
    bio: 'Senior Software Engineer with 10+ years of experience at tech giants.',
    courses: 8,
    students: 45000,
    avatar: '👩‍🏫',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Dr. Ahmed Khan',
    specialty: 'AI & Machine Learning',
    bio: 'PhD in Computer Science, published researcher in deep learning.',
    courses: 6,
    students: 28000,
    avatar: '👨‍🎓',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    specialty: 'UI/UX Design',
    bio: 'Award-winning designer and creative director at leading design studios.',
    courses: 5,
    students: 22000,
    avatar: '👩‍🎨',
    color: 'from-emerald-500 to-teal-600',
  },
];

// ─── Shared Styles ────────────────────────────────────────────────────────────

const cardClass =
  'rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] shadow-[var(--shadow-soft)] backdrop-blur-xl';

const badgeClass =
  'inline-flex rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-soft)] px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-primary)]';

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-32">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 w-96 rounded-full bg-[color:var(--hero-glow)] blur-3xl sm:h-[28rem] sm:w-[28rem] md:h-96 md:w-96" />
      <div className="absolute top-48 right-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15),transparent_70%)] blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className={badgeClass}>
            ✨ Welcome to LearnX Academy
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-5xl lg:text-7xl">
            Learn Skills That{' '}
            <span className="bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
              Matter
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] sm:text-xl">
            Master modern development, design, and AI with courses taught by industry experts. Start learning today and transform your career.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]">
              Start Learning
              <FaArrowRight className="text-sm" />
            </button>
            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-8 py-4 font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] transition duration-200 hover:border-[color:var(--accent-primary)] hover:-translate-y-0.5">
              Explore Courses
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[color:var(--text-primary)] sm:text-3xl">
                500+
              </div>
              <p className="text-sm text-[color:var(--text-muted)]">Courses Available</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[color:var(--text-primary)] sm:text-3xl">
                150K+
              </div>
              <p className="text-sm text-[color:var(--text-muted)]">Active Learners</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[color:var(--text-primary)] sm:text-3xl">
                4.9★
              </div>
              <p className="text-sm text-[color:var(--text-muted)]">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Courses Section ─────────────────────────────────────────────────

function CourseCard({ course }) {
  const Icon = course.icon;

  return (
    <div className={`${cardClass} overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]`}>
      {/* Course Header with Color */}
      <div className={`bg-linear-to-br ${course.color} relative h-40 p-6 sm:h-48`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent)]" />
        <div className="relative flex items-center justify-between">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-xl text-white backdrop-blur-md">
              <Icon />
            </span>
          </div>
          <span className="rounded-xl bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-lg font-bold text-[color:var(--text-primary)] line-clamp-2 hover:text-[color:var(--accent-primary)] transition">
            {course.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)] line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Course Meta */}
        <div className="space-y-3 border-t border-[color:var(--border-soft)] pt-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-[color:var(--text-primary)]">
              {course.instructor}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-[color:var(--text-primary)]">
                {course.rating}
              </span>
              <span className="text-[color:var(--text-muted)]">({course.students.toLocaleString()})</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[color:var(--text-muted)]">
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[color:var(--border-soft)] pt-4">
          <span className="text-2xl font-bold text-[color:var(--text-primary)]">
            {course.price}
          </span>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--surface-soft)] px-4 py-2 font-semibold text-[color:var(--accent-primary)] transition hover:bg-[color:var(--surface-strong)]">
            Enroll
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedCoursesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={badgeClass}>
            Featured Courses
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">
            Curated Courses from Industry Experts
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
            Start with our most popular courses designed to help you master in-demand skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-8 py-4 font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] transition duration-200 hover:border-[color:var(--accent-primary)] hover:-translate-y-0.5">
            View All Courses
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Categories Section ───────────────────────────────────────────────────────

function CategoriesSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={badgeClass}>
            Explore Topics
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">
            Learn by Category
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
            Browse courses in trending topics and find your next learning adventure.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className={`${cardClass} flex flex-col items-center justify-center gap-6 p-8 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--border-strong)]`}
              >
                <div className={`h-16 w-16 flex items-center justify-center rounded-2xl bg-linear-to-br ${category.color} ${category.borderColor} border`}>
                  <Icon className={`text-3xl ${category.textColor}`} />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-[color:var(--text-primary)]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    {category.courses}
                  </p>
                </div>

                <button className="w-full rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] py-3 font-semibold text-[color:var(--text-primary)] transition hover:bg-[color:var(--surface-strong)] hover:border-[color:var(--accent-primary)]">
                  Browse
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialCard({ testimonial }) {
  return (
    <div className={`${cardClass} flex flex-col gap-4 p-6 sm:p-8 transition duration-200 hover:-translate-y-1`}>
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>

      {/* Quote Icon */}
      <FaQuoteLeft className="text-2xl text-[color:var(--accent-primary)] opacity-50" />

      {/* Testimonial Content */}
      <p className="text-base leading-7 text-[color:var(--text-secondary)]">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3 border-t border-[color:var(--border-soft)] pt-4">
        <div className="text-2xl">{testimonial.avatar}</div>
        <div>
          <h4 className="font-semibold text-[color:var(--text-primary)]">
            {testimonial.name}
          </h4>
          <p className="text-sm text-[color:var(--text-muted)]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={badgeClass}>
            Success Stories
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">
            Loved by Learners Worldwide
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
            Join thousands of students who have transformed their careers with LearnX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Instructor Highlights Section ────────────────────────────────────────────

function InstructorCard({ instructor }) {
  return (
    <div className={`${cardClass} overflow-hidden transition duration-200 hover:-translate-y-1`}>
      {/* Header */}
      <div className={`bg-linear-to-br ${instructor.color} relative h-32 p-6`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.3),transparent)]" />
        <div className="relative text-center">
          <div className="text-5xl">{instructor.avatar}</div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="text-center">
          <h3 className="text-lg font-bold text-[color:var(--text-primary)]">
            {instructor.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[color:var(--accent-primary)]">
            {instructor.specialty}
          </p>
        </div>

        <p className="text-sm leading-6 text-[color:var(--text-secondary)] text-center">
          {instructor.bio}
        </p>

        {/* Stats */}
        <div className="space-y-3 border-t border-[color:var(--border-soft)] pt-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FaBook className="text-[color:var(--accent-primary)]" />
              <span className="font-semibold text-[color:var(--text-primary)]">
                {instructor.courses}
              </span>
              <span className="text-[color:var(--text-muted)]">Courses</span>
            </div>
            <div className="h-4 w-px bg-[color:var(--border-soft)]" />
            <div className="flex items-center gap-1">
              <FaUsers className="text-[color:var(--accent-primary)]" />
              <span className="font-semibold text-[color:var(--text-primary)]">
                {(instructor.students / 1000).toFixed(0)}K
              </span>
              <span className="text-[color:var(--text-muted)]">Students</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full rounded-full bg-linear-to-r from-sky-500 to-emerald-500 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          View Profile
        </button>
      </div>
    </div>
  );
}

function InstructorHighlightsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className={badgeClass}>
            Meet Experts
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">
            Learn from Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
            Our instructors are experienced professionals passionate about teaching and mentoring.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-72 rounded-full bg-[color:var(--hero-glow)] blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15),transparent_70%)] blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className={`${cardClass} relative overflow-hidden p-8 sm:p-12 lg:p-16 text-center`}>
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_center,rgba(56,189,248,0.2),transparent_60%)]" />

          <div className="relative space-y-6">
            <h2 className="text-3xl font-bold text-[color:var(--text-primary)] sm:text-4xl lg:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[color:var(--text-secondary)]">
              Join thousands of learners who are already advancing their skills and building their future with LearnX.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-6">
              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]">
                Get Started Now
                <FaArrowRight className="text-sm" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--border-soft)] bg-transparent px-8 py-4 font-semibold text-[color:var(--text-primary)] transition duration-200 hover:bg-[color:var(--surface-soft)] hover:-translate-y-0.5">
                Browse All Courses
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main HomePage Component ──────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Top padding for fixed navbar */}
      <div className="pt-0 sm:pt-0 lg:pt-0" style={{ paddingTop: '5rem' }} />

      <HeroSection />
      <FeaturedCoursesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <InstructorHighlightsSection />
      <CTASection />
    </main>
  );
}
