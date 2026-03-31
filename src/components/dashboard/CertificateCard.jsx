import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';

const CertificateCard = ({
  courseName,
  studentName,
  completionDate,
  certificateId,
  instructorName,
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border-2 border-dashed border-teal-200 bg-white dark:bg-gray-800"
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(13, 148, 136, 0.15)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Teal gradient header strip */}
      <div className="h-3 bg-gradient-to-r from-teal-400 to-cyan-500" />

      <div className="p-6">
        {/* Award Icon as seal - centered */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
            <Award className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Certificate of Completion subtitle */}
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Certificate of Completion
        </p>

        {/* Course name as large bold title */}
        <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
          {courseName}
        </h3>

        {/* Awarded to line */}
        <p className="mb-2 text-center text-gray-600 dark:text-gray-300">
          Awarded to: <span className="font-semibold text-gray-900 dark:text-white">{studentName}</span>
        </p>

        {/* Instructor name */}
        <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Verified by {instructorName}
        </p>

        {/* Completion date and certificate ID at bottom */}
        <div className="mb-6 flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span>{completionDate}</span>
          <span className="font-mono">ID: {certificateId}</span>
        </div>

        {/* Download button */}
        <motion.button
          className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="h-5 w-5" />
          Download Certificate
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CertificateCard;