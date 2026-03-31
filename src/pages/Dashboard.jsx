import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/dashboard/Sidebar';
import EnrolledCourses from '../components/dashboard/EnrolledCourses';
import ProgressBar from '../components/dashboard/ProgressBar';
import CertificateCard from '../components/dashboard/CertificateCard';

const courses = [
  { id: 1, title: 'React Fundamentals', instructor: 'Sarah Chen', duration: '12h', progress: 75, color: 'teal' },
  { id: 2, title: 'UI/UX Design Mastery', instructor: 'Mike Torres', duration: '8h', progress: 40, color: 'purple' },
  { id: 3, title: 'AI & Machine Learning', instructor: 'Dr. Patel', duration: '20h', progress: 25, color: 'blue' },
  { id: 4, title: 'Node.js Backend Dev', instructor: 'James Wilson', duration: '15h', progress: 60, color: 'orange' },
];

const certificates = [
  {
    courseName: 'React Fundamentals',
    studentName: 'Alex Johnson',
    completionDate: 'March 15 2026',
    certificateId: 'CERT-001',
    instructorName: 'Sarah Chen',
  },
  {
    courseName: 'UI/UX Design Mastery',
    studentName: 'Alex Johnson',
    completionDate: 'April 2 2026',
    certificateId: 'CERT-002',
    instructorName: 'Mike Torres',
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h1>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                {courses.length} enrolled
              </span>
            </div>
            <EnrolledCourses />
          </motion.div>
        );

      case 'progress':
        return (
          <motion.div
            key="progress"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">My Progress</h1>
            
            {/* Overall progress summary */}
            <div className="mb-8 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    3 of 4 courses in progress
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Keep going! You're doing great.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bars for all courses */}
            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Course Progress</h2>
              {courses.map((course) => (
                <ProgressBar
                  key={course.id}
                  label={course.title}
                  percentage={course.progress}
                  color={course.color}
                />
              ))}
            </div>
          </motion.div>
        );

      case 'certificates':
        return (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">My Certificates</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {certificates.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:bg-gray-950">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main content */}
      <main className="flex-1 px-4 py-8 lg:ml-64">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;