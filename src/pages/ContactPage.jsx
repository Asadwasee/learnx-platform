import React from 'react';
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaCheckCircle, FaArrowRight, FaChevronDown 
} from 'react-icons/fa';

const contactChannels = [
  { icon: FaEnvelope, title: 'Email Us', detail: 'support@learnx.io', note: 'For general questions and guidance.' },
  { icon: FaPhoneAlt, title: 'Call Support', detail: '+1 (800) 555-0147', note: 'Available for urgent assistance.' },
  { icon: FaMapMarkerAlt, title: 'Visit HQ', detail: 'Innovation Avenue, SF', note: 'Meet the team behind LearnX.' },
];

const faqItems = [
  { question: 'How quickly does LearnX respond?', answer: 'Most queries receive a response within 24 hours.' },
  { question: 'Can I ask about course guidance?', answer: 'Yes, our team can help you choose the right path.' },
  { question: 'Do you offer enterprise training?', answer: 'Absolutely. We support curated learning paths for teams.' },
  { question: 'Where can I report technical issues?', answer: 'Use the contact form and choose the Technical Support topic.' },
];

const ContactPage = ({ errors, formData, handleChange, handleSubmit, isSubmitted, openFaq, setOpenFaq }) => {
  return (
    <main className="relative overflow-hidden pt-24 bg-(--bg-main)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <span className="inline-flex rounded-full border border-(--border-strong) bg-(--surface-soft) px-4 py-2 text-xs font-bold uppercase tracking-widest text-(--accent-primary)">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-(--text-primary) sm:text-5xl">
            Reach out through a polished experience.
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side: Info Cards */}
          <div className="space-y-6">
            {contactChannels.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-3xl border border-(--border-soft) bg-(--surface-card) p-6 transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--surface-soft) text-(--accent-primary)">
                  <item.icon />
                </div>
                <div>
                  <h3 className="font-bold text-(--text-primary)">{item.title}</h3>
                  <p className="text-sm font-medium text-(--accent-primary)">{item.detail}</p>
                  <p className="text-xs text-(--text-muted)">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Form */}
          <div className="rounded-4xl border border-(--border-soft) bg-(--surface-card) p-8 shadow-xl">
            {isSubmitted && (
              <div className="mb-6 flex gap-3 rounded-xl bg-emerald-500/10 p-4 text-emerald-600 text-sm">
                <FaCheckCircle className="mt-1" />
                <p>Message sent successfully!</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-(--text-primary)">Full Name</label>
                <input name="name" type="text" value={formData.name} onChange={handleChange} className="rounded-xl border border-(--border-soft) bg-(--surface-soft) p-4 text-(--text-primary) outline-none focus:ring-2 focus:ring-cyan-400/20" />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-(--text-primary)">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="rounded-xl border border-(--border-soft) bg-(--surface-soft) p-4 text-(--text-primary) outline-none focus:ring-2 focus:ring-cyan-400/20" />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-(--text-primary)">Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="rounded-xl border border-(--border-soft) bg-(--surface-soft) p-4 text-(--text-primary) outline-none resize-none" />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" className="sm:w-fit inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-sky-500 to-emerald-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 cursor-pointer">
                Submit Inquiry <FaArrowRight />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faqs" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-(--text-primary)">Common Questions</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-2xl border border-(--border-soft) bg-(--surface-card) p-6">
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between text-left font-semibold text-(--text-primary) cursor-pointer">
                  {item.question}
                  <FaChevronDown className={`transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-sm text-(--text-secondary) leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;