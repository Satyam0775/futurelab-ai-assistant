const TRACKS = [
  {
    track: "Essentials",
    tag: "All team members",
    color: "#00c2a8",
    items: [
      "AI fundamentals & mental models",
      "Responsible AI usage & safety",
      "Prompt engineering basics",
      "AI tools for everyday productivity",
    ],
    duration: "Half-day or full-day",
    format: "In-person or remote",
  },
  {
    track: "Function Deep-Dives",
    tag: "Marketing · Sales · Ops",
    color: "#e8c97a",
    items: [
      "Role-specific use cases and demos",
      "Live hands-on tool sessions",
      "Workflow integration exercises",
      "Q&A and troubleshooting",
    ],
    duration: "Full-day immersive",
    format: "In-person preferred",
  },
  {
    track: "AI Builder Program",
    tag: "Advanced teams",
    color: "#818cf8",
    items: [
      "Prototype and build real AI solutions",
      "LLM integration and RAG architecture",
      "Tool selection and evaluation",
      "Demo day and peer review",
    ],
    duration: "Multi-week cohort",
    format: "Hybrid delivery",
  },
];

export default function WorkshopsView() {
  return (
    <div className="content-view">
      <div className="cv-eyebrow">Training & Enablement</div>
      <h1 className="cv-title">
        Hands-on workshops for<br /><em>every level</em>
      </h1>
      <p className="cv-lead">
        Futurelab's workshop programs are designed around real-world application,
        not theoretical lectures. Every session leaves participants with practical
        skills they can use the next day.
      </p>

      <div className="cv-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {TRACKS.map(({ track, tag, color, items, duration, format }) => (
          <div className="cv-card" key={track} style={{ borderTop: `2px solid ${color}` }}>
            <div style={{ marginBottom: 16 }}>
              <div className="cv-card-title">{track}</div>
              <div style={{
                display: "inline-block",
                background: `${color}18`,
                border: `1px solid ${color}33`,
                color,
                fontSize: 10,
                fontFamily: "var(--ff-mono)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: 4,
                marginTop: 4,
              }}>
                {tag}
              </div>
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
              {items.map((item) => (
                <li key={item} style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  fontSize: 13,
                  color: "var(--t2)",
                  lineHeight: 1.6,
                  marginBottom: 8,
                }}>
                  <span style={{ color, marginTop: 4, flexShrink: 0 }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              {[["Duration", duration], ["Format", format]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--ff-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--t4)" }}>{k}</span>
                  <span style={{ fontSize: 12, color: "var(--t2)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
