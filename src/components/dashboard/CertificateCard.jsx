import { FaAward, FaDownload, FaShareAlt } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    course: 'UI/UX Design Masterclass',
    instructor: 'Mia Tanaka',
    issuedDate: 'March 15, 2026',
    credentialId: 'LX-2026-UX-4821',
    color: 'from-emerald-500 to-teal-500',
    bgAccent: 'from-emerald-500/10 to-teal-500/10',
    borderAccent: 'border-emerald-400/30',
  },
];

const locked = [
  {
    id: 2,
    course: 'Complete React Developer Bootcamp',
    progress: 72,
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 3,
    course: 'Machine Learning with Python',
    progress: 38,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 4,
    course: 'Advanced JavaScript Patterns',
    progress: 15,
    color: 'from-orange-400 to-rose-500',
  },
];

const CertificateCard = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Certificates</h2>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
          Complete a course to earn your verified certificate.
        </p>
      </div>

      {/* Earned certificates */}
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className={`relative overflow-hidden rounded-[1.75rem] border ${cert.borderAccent} bg-[color:var(--surface-card)] shadow-[var(--shadow-soft)] backdrop-blur-xl`}
        >
          {/* Decorative background glow */}
          <div
            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_70%)]`}
          />
          <div
            className={`pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12),transparent_70%)]`}
          />

          <div className="relative p-6 sm:p-8">
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${cert.color} text-white shadow-lg`}
              >
                <FaAward className="text-xl" />
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-emerald-600 [html[data-theme='dark']_&]:text-emerald-300">
                Verified ✓
              </span>
            </div>

            {/* Certificate body */}
            <div className="mt-5 space-y-1">
              <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                Certificate of Completion
              </p>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{cert.course}</h3>
              <p className="text-sm text-[color:var(--text-muted)]">Instructor: {cert.instructor}</p>
            </div>

            {/* Divider */}
            <div
              className={`my-5 h-px w-full bg-linear-to-r ${cert.color} opacity-25`}
            />

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'Issued On', value: cert.issuedDate },
                { label: 'Credential ID', value: cert.credentialId },
                { label: 'Issued By', value: 'LearnX Platform' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] p-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[color:var(--text-muted)]">
                    {label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[color:var(--text-primary)]">{value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r ${cert.color} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <FaDownload className="text-xs" />
                Download PDF
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text-primary)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
              >
                <FaShareAlt className="text-xs" />
                Share
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Locked / upcoming certificates */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
          Upcoming Certificates
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locked.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[color:var(--surface-soft)] opacity-60" />
              <div className="relative space-y-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white opacity-60`}
                >
                  <FaAward className="text-sm" />
                </div>
                <p className="text-sm font-semibold leading-snug text-[color:var(--text-primary)] opacity-70 line-clamp-2">
                  {item.course}
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.7rem] text-[color:var(--text-muted)]">Completion needed</span>
                    <span className="text-[0.7rem] font-bold text-[color:var(--text-muted)]">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--surface-soft)]">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${item.color} opacity-50`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-[0.68rem] text-[color:var(--text-muted)]">
                  🔒 Complete course to unlock
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateCard;