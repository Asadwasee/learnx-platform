import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import ProgressBar from './ProgressBar';

const courses = [
  {
    id: 1,
    title: 'React Fundamentals',
    instructor: 'Sarah Chen',
    duration: '12h',
    progress: 75,
    color: 'teal',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    id: 2,
    title: 'UI/UX Design Mastery',
    instructor: 'Mike Torres',
    duration: '8h',
    progress: 40,
    color: 'purple',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    instructor: 'Dr. Patel',
    duration: '20h',
    progress: 25,
    color: 'blue',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 4,
    title: 'Node.js Backend Dev',
    instructor: 'James Wilson',
    duration: '15h',
    progress: 60,
    color: 'orange',
    gradient: 'from-orange-400 to-red-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const EnrolledCourses = () => {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <BookOpen className="mb-4 h-16 w-16 text-gray-300 dark:text-gray-600" />
        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">No courses yet</p>
        <button className="rounded-full bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600">
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {courses.map((course) => (
        <motion.div
          key={course.id}
          className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
          variants={itemVariants}
          whileHover={{ y: -4 }}
        >
          {/* Colored thumbnail placeholder */}
          <div className={`h-32 bg-gradient-to-br ${course.gradient}`} />

          <div className="p-5">
            {/* Course title */}
            <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
              {course.title}
            </h3>

            {/* Instructor name */}
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              {course.instructor}
            </p>

            {/* Duration with Clock icon */}
            <div className="mb-4 flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>

            {/* ProgressBar component */}
            <div className="mb-4">
              <ProgressBar
                label=""
                percentage={course.progress}
                color={course.color}
              />
            </div>

            {/* Continue Learning button */}
            <motion.button
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-2.5 font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue Learning
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EnrolledCourses;