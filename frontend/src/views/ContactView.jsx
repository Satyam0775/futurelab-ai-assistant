const CONTACT_ITEMS = [
  {
    label: "Website",
    value: "futurelabstudios.com",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="7" cy="7" r="6" />
        <path d="M7 1c-2 2-3 3.8-3 6s1 4 3 6M7 1c2 2 3 3.8 3 6s-1 4-3 6M1 7h12" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@futurelabstudios.com",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="1" y="3" width="12" height="8" rx="1" />
        <path d="M1 3l6 5 6-5" />
      </svg>
    ),
  },
  {
    label: "Reach",
    value: "Global · Remote-first",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="7" cy="7" r="6" />
        <path d="M2 5h10M2 9h10" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="7" cy="7" r="6" />
        <path d="M7 4v3.5l2.5 1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ContactView({ onNav }) {
  return (
    <div className="content-view">
      <div className="cv-eyebrow">Get In Touch</div>
      <h1 className="cv-title">
        Let's build something<br /><em>meaningful</em>
      </h1>
      <p className="cv-lead">
        Whether you're exploring AI for the first time or need a technical
        partner for a complex deployment — we'd love to hear from you.
      </p>

      <div className="cv-contact-grid">
        <div className="cv-contact-info">
          <h3>Contact Information</h3>
          {CONTACT_ITEMS.map(({ label, value, icon }) => (
            <div className="cv-contact-item" key={label}>
              <div className="cv-contact-item-icon">{icon}</div>
              <div>
                <div className="cv-contact-item-label">{label}</div>
                <div className="cv-contact-item-value">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="cv-cta-box">
            <div className="cv-eyebrow" style={{ marginBottom: 8 }}>AI Assistant</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--t1)", marginBottom: 12 }}>
              Chat with us now
            </h3>
            <p>
              Have a quick question about our services, workshops, or how Futurelab
              can help your organization? Our AI assistant is available right now.
            </p>
            <button className="cv-cta-btn" onClick={() => onNav("chat")}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 8.5a1 1 0 0 1-1 1H3.5l-2 2V2.5a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6z" />
              </svg>
              Open AI Assistant
            </button>
          </div>

          <div style={{
            marginTop: 16,
            background: "var(--depth-2)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: 24,
          }}>
            <div className="cv-card-title" style={{ marginBottom: 10 }}>Working Hours</div>
            {[
              ["Mon – Fri", "09:00 – 18:00 UTC"],
              ["Weekends", "Limited support"],
              ["AI Assistant", "24 / 7"],
            ].map(([day, hrs]) => (
              <div key={day} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid var(--line)",
              }}>
                <span style={{ fontSize: 13, color: "var(--t2)" }}>{day}</span>
                <span style={{ fontFamily: "var(--ff-mono)", fontSize: 12, color: "var(--t1)" }}>{hrs}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
