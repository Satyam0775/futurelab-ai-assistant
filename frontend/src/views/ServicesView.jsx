const SERVICES = [
  {
    title: "AI Strategic Consulting",
    desc: "We work with leadership teams to identify high-impact AI use cases, design adoption roadmaps, and align AI strategy with business goals.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15l4-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="4" r="2" />
      </svg>
    ),
  },
  {
    title: "Custom AI Tools",
    desc: "We build knowledge chatbots, AI voice agents, and retrieval-augmented systems tailored to your workflows and technology stack.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="14" height="10" rx="2" />
        <path d="M6 5V4a3 3 0 0 1 6 0v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    desc: "Apply AI to real operational challenges — document processing, customer support, internal search, and multi-step workflow orchestration.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="4" cy="9" r="2" />
        <circle cx="14" cy="9" r="2" />
        <path d="M6 9h6" strokeLinecap="round" />
        <path d="M4 7V4h10v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Adoption Planning",
    desc: "Structured programs to move organizations from AI-curious to AI-capable, with clear milestones, team readiness assessments, and governance.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 14L9 3l6 11H3z" strokeLinejoin="round" />
        <path d="M9 9v3M9 13.5v.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fractional CTO",
    desc: "On-demand technology leadership for growing companies — AI strategy, architecture guidance, team mentoring, and vendor oversight.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="6" r="3" />
        <path d="M2 16c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "RAG Systems",
    desc: "Retrieval-augmented generation systems that give your teams accurate, source-cited answers from internal documents, databases, and knowledge bases.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h10v10H4z" rx="1" />
        <path d="M7 8h4M7 11h2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesView() {
  return (
    <div className="content-view">
      <div className="cv-eyebrow">What We Offer</div>
      <h1 className="cv-title">
        AI services built for<br /><em>real business</em>
      </h1>
      <p className="cv-lead">
        Futurelab Studios delivers end-to-end AI enablement — from strategic
        consulting to production-ready tools — focused on practical impact,
        not hype.
      </p>

      <div className="cv-grid">
        {SERVICES.map(({ title, desc, icon }) => (
          <div className="cv-card" key={title}>
            <div className="cv-card-icon">{icon}</div>
            <div className="cv-card-title">{title}</div>
            <div className="cv-card-desc">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
