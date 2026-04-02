import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaMoon,
  FaPhoneAlt,
  FaRegClock,
  FaSun,
} from 'react-icons/fa';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';

const faqItems = [
  {
    question: 'How quickly does LearnX support respond to messages?',
    answer:
      'Most queries receive a response within 24 hours on business days. Priority learner and instructor requests are usually handled even faster.',
  },
  {
    question: 'Can I ask about course guidance before enrolling?',
    answer:
      'Yes. Our team can help you compare learning tracks, understand skill prerequisites, and choose the right path for your goals.',
  },
  {
    question: 'Do you offer help for enterprise or team training?',
    answer:
      'Absolutely. We support custom onboarding, curated learning paths, and progress tracking for organizations and growing teams.',
  },
  {
    question: 'Where can I report technical issues on the platform?',
    answer:
      'Use the contact form and choose the Technical Support topic. Include the device, browser, and a short description so we can troubleshoot faster.',
  },
];

const contactChannels = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    detail: 'support@learnx.io',
    note: 'For general questions, billing, and course guidance.',
  },
  {
    icon: FaPhoneAlt,
    title: 'Call Support',
    detail: '+1 (800) 555-0147',
    note: 'Available for urgent support and enrollment assistance.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Visit HQ',
    detail: 'Innovation Avenue, San Francisco',
    note: 'Meet the team behind our future-ready learning platform.',
  },
];

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  topic: 'General Inquiry',
  message: '',
};

const cardClass =
  'rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] shadow-[var(--shadow-soft)] backdrop-blur-xl';

const softPanelClass =
  'rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)]';

const fieldBaseClass =
  'w-full rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-4 py-4 text-[color:var(--text-primary)] outline-none transition focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10 placeholder:text-[color:var(--text-muted)]';

function ContactPageWithForm({
  errors,
  formData,
  handleChange,
  handleSubmit,
  isSubmitted,
  openFaq,
  setOpenFaq,
}) {
  return (
    <main className="relative overflow-hidden pt-24">
      <section id="contact" className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-72 rounded-full bg-[color:var(--hero-glow)] blur-3xl sm:h-96 sm:w-96" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-soft)] px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-primary)]">
              Contact Page
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl">
                Reach out through a polished, futuristic contact experience.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--text-secondary)] sm:text-lg">
                Built to match the LearnX look and feel, this page blends clean structure, strong contrast, and responsive spacing with inline validation that keeps the form easy to complete.
              </p>
            </div>

            <div className={`${cardClass} relative overflow-hidden p-6 sm:p-8`}>
              <div className="pointer-events-none absolute -top-14 left-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_70%)]" />
              <div className="relative space-y-6">
                <div className={`${softPanelClass} flex items-center justify-between p-4`}>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--text-muted)]">Support Concierge</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">
                      Always one step ahead
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-blue-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25">
                    <FaHeadset />
                  </div>
                </div>

                <div className="grid gap-4">
                  {contactChannels.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.4rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(16,185,129,0.18))] text-[color:var(--accent-primary)]">
                          <Icon />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">{item.title}</h3>
                          <p className="text-sm font-medium text-[color:var(--accent-primary)]">{item.detail}</p>
                          <p className="text-sm leading-6 text-[color:var(--text-muted)]">{item.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={`${softPanelClass} p-5`}>
                  <div className="flex items-center gap-3 text-[color:var(--text-primary)]">
                    <FaRegClock className="text-[color:var(--accent-secondary)]" />
                    <span className="font-medium">Support hours</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
                    Monday to Friday, 8:00 AM to 7:00 PM PST. Weekend requests are queued for the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${cardClass} p-6 sm:p-8`}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Send us a message</h2>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Fill out the form and our team will get back to you shortly.
                </p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-soft)] text-[color:var(--accent-primary)] sm:flex">
                <FaEnvelope />
              </div>
            </div>

            {isSubmitted && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 [html[data-theme='dark']_&]:text-emerald-300">
                <FaCheckCircle className="mt-0.5 shrink-0" />
                <p>Your message was sent successfully. We will reply as soon as possible.</p>
              </div>
            )}

            <form className="grid gap-5 sm:grid-cols-2" noValidate onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <label className="text-[0.95rem] font-semibold text-[color:var(--text-primary)]" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${fieldBaseClass} ${errors.name ? 'border-red-400/80 ring-4 ring-red-400/10' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.95rem] font-semibold text-[color:var(--text-primary)]" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${fieldBaseClass} ${errors.email ? 'border-red-400/80 ring-4 ring-red-400/10' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.95rem] font-semibold text-[color:var(--text-primary)]" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${fieldBaseClass} ${errors.subject ? 'border-red-400/80 ring-4 ring-red-400/10' : ''}`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.95rem] font-semibold text-[color:var(--text-primary)]" htmlFor="topic">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className={fieldBaseClass}
                >
                  <option>General Inquiry</option>
                  <option>Course Guidance</option>
                  <option>Technical Support</option>
                  <option>Partnerships</option>
                </select>
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2">
                <label className="text-[0.95rem] font-semibold text-[color:var(--text-primary)]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldBaseClass} resize-none ${errors.message ? 'border-red-400/80 ring-4 ring-red-400/10' : ''}`}
                  placeholder="Tell us what you need, including any relevant details."
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <button
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(14,165,233,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(14,165,233,0.3)] sm:w-auto"
                  type="submit"
                >
                  Submit Inquiry
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="faqs" className="relative pb-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-soft)] px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-primary)]">
              FAQs Section
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
              Common questions, answered with the same clean product language.
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--text-secondary)]">
              Expand any item to learn more. The cards are built with motion, strong hierarchy, and responsive spacing to stay elegant across phones, tablets, and desktops.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`rounded-[1.6rem] border p-6 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 ${
                    isOpen
                      ? 'border-[color:var(--border-strong)] bg-[color-mix(in_srgb,var(--surface-card)_76%,var(--surface-soft)_24%)]'
                      : 'border-[color:var(--border-soft)] bg-[color:var(--surface-card)]'
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="text-lg font-semibold text-[color:var(--text-primary)]">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--surface-soft)] text-[color:var(--accent-primary)] transition duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <FaChevronDown />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <p className="overflow-hidden pt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  const [pathname, setPathname] = useState(window.location.pathname);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('learnx-theme');
    const preferredTheme =
      savedTheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('learnx-theme', theme);
  }, [theme]);

  useEffect(() => {
    const syncLocation = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a short subject.';
    } else if (formData.subject.trim().length < 4) {
      nextErrors.subject = 'Subject should be at least 4 characters.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us how we can help.';
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const isContactPage = pathname === '/contact';
  const isDashboardPage = pathname === '/dashboard';
  const isCoursesPage = pathname === '/courses';

  return (
    <div className="relative isolate min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(56,189,248,0.08),transparent_35%),linear-gradient(220deg,rgba(249,115,22,0.06),transparent_30%)]" />

      {!isDashboardPage && <Navbar theme={theme} onToggleTheme={toggleTheme} />}

      {isDashboardPage ? (
        <Dashboard />
      ) : isCoursesPage ? (
        <CoursesPage />
      ) : isContactPage ? (
        <ContactPageWithForm
          errors={errors}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
      ) : (
        <HomePage />
      )}

      {!isDashboardPage && <Footer />}

      {!isDashboardPage && (
        <button
          type="button"
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 z-40 hidden h-13 w-13 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] text-[color:var(--text-primary)] shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 sm:inline-flex"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      )}
    </div>
  );
}

export default App;