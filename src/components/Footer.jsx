import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerLinks = {
  platform: [
    { name: 'Browse Courses', href: '/' },
    { name: 'Learning Experience', href: '/contact' },
    { name: 'Support Center', href: '/contact#faqs' },
  ],
  resources: [
    { name: 'FAQs', href: '/contact#faqs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'GitHub', href: '#', icon: FaGithub },
  { name: 'Twitter', href: '#', icon: FaTwitter },
];

const Footer = () => {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--footer-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent">
              LearnX
            </span>
            <p className="max-w-md text-sm leading-7 text-[color:var(--text-secondary)]">
              A modern learning platform shaped for curious minds, supported by a responsive contact experience and an elegant FAQ flow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5"
                    aria-label={item.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[color:var(--text-primary)]">Platform</h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.platform.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[color:var(--text-secondary)] transition duration-200 hover:text-[color:var(--accent-primary)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[color:var(--text-primary)]">Resources</h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[color:var(--text-secondary)] transition duration-200 hover:text-[color:var(--accent-primary)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <h3 className="text-base font-bold text-[color:var(--text-primary)]">Stay Updated</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
              Subscribe for course launches, product updates, and learning insights.
            </p>
            <form className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-4 py-4 text-[color:var(--text-primary)] outline-none transition focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10 placeholder:text-[color:var(--text-muted)]"
              />
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)]"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--border-soft)] pt-6 text-sm text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 LearnX Platform. All rights reserved.</p>
          <p>Built with a clean, responsive dark and light experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
