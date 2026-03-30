import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/contact#faqs' },
];

const iconButtonClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--nav-bg)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0">
          <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            LearnX
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-2 py-2 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition duration-200 hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--text-primary)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className={iconButtonClass}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]"
          >
            Start Learning
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className={iconButtonClass}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={iconButtonClass}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--text-secondary)] transition duration-200 hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--text-primary)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]"
            >
              Start Learning
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
