import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-(--border-soft) bg-(--nav-bg)/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0">
          <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            LearnX
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-(--text-secondary) hover:text-(--accent-primary) transition">
              {link.name}
            </a>
          ))}
          <button onClick={onToggleTheme} className="p-2 rounded-full border border-(--border-soft) bg-(--surface-card) text-(--text-primary) cursor-pointer">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <a href="/courses" className="bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-2.5 rounded-full font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
            Start Learning
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={onToggleTheme} className="p-2 text-(--text-primary)">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-(--text-primary)">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-(--surface-card) p-4 space-y-3 border-t border-(--border-soft)">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block px-4 py-2 text-(--text-secondary)">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;