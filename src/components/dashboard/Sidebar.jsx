import { BookOpen, TrendingUp, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activeTab = 'courses', onTabChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'certificates', label: 'Certificates', icon: Award },
  ];

  const handleNavClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
    setIsMobileOpen(false);
  };

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white dark:bg-gray-900">
      {/* LearnX Logo */}
      <div className="border-b border-gray-200 dark:border-gray-800 px-6 py-5">
        <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          LearnX
        </span>
      </div>

      {/* User Section */}
      <div className="border-b border-gray-200 dark:border-gray-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-white font-semibold text-sm">
            AJ
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Alex Johnson</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Pro Learner</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-full bg-white dark:bg-gray-800 p-3 shadow-lg lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Desktop Sidebar - Fixed */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-gray-200 dark:border-gray-800 shadow-lg lg:flex">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar - Slide in with Framer Motion */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            
            {/* Sidebar Panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col shadow-2xl lg:hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;