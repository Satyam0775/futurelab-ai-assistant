const TITLES = {
  chat:      { title: "AI Assistant",  crumb: "Futurelab Studios · Intelligent Support" },
  services:  { title: "Services",      crumb: "Futurelab Studios · What We Offer" },
  workshops: { title: "Workshops",     crumb: "Futurelab Studios · Training & Enablement" },
  contact:   { title: "Contact",       crumb: "Futurelab Studios · Get In Touch" },
};

export default function Topbar({ view }) {
  const { title, crumb } = TITLES[view] || TITLES.chat;
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-title">{title}</span>
        <span className="topbar-crumb">{crumb}</span>
      </div>
      <div className="topbar-right">
        <div className="status-pill">
          <span className="sb-status-dot" style={{ width: 5, height: 5, flexShrink: 0 }} />
          Online
        </div>
      </div>
    </header>
  );
}
