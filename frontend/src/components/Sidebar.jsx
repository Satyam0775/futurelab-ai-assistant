import futurelabImg from "../assets/futurelab-studio.png";

const NAV = [
  {
    id: "chat",
    label: "AI Assistant",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 10.5a1 1 0 0 1-1 1H4l-2 2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.5z" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1.5" />
        <rect x="9" y="1.5" width="5.5" height="5.5" rx="1.5" />
        <rect x="1.5" y="9" width="5.5" height="5.5" rx="1.5" />
        <rect x="9" y="9" width="5.5" height="5.5" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 4h12M2 8h8M2 12h6" strokeLinecap="round" />
        <circle cx="13" cy="10.5" r="2.5" />
        <path d="M13 8V7M10.5 10.5H9.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3.5h12v9H2z" rx="1" />
        <path d="M2 3.5l6 5 6-5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Sidebar({ active, onNav }) {
  return (
    <aside className="sidebar">
      {/* Hero */}
      <div className="sb-hero">
        <img src={futurelabImg} alt="Futurelab Studio" />
        <div className="sb-hero-fade" />
        <span className="sb-hero-tag">Futurelab · Studio</span>
      </div>

      {/* Brand */}
      <div className="sb-brand">
        <div className="sb-brand-name">Futurelab</div>
        <div className="sb-brand-tagline">AI Assistant</div>
      </div>

      <div className="sb-divider" />

      {/* Nav */}
      <div className="sb-nav-label">Navigation</div>
      <nav className="sb-nav">
        {NAV.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`sb-nav-item ${active === id ? "active" : ""}`}
            onClick={() => onNav(id)}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sb-footer">
        <div className="sb-status">
          <span className="sb-status-dot" />
          System operational
        </div>
      </div>
    </aside>
  );
}
