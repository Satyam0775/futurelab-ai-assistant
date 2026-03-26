function renderContent(text) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return p.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function MessageBubble({ role, text, time, isError }) {
  return (
    <div className={`msg-row ${role === "user" ? "user" : "bot"}`}>
      <div className="msg-meta">{role === "user" ? "You" : "Futurelab AI"}</div>
      <div className={`bubble ${isError ? "error" : ""}`}>
        {renderContent(text)}
      </div>
      <div className="msg-time">{time}</div>
    </div>
  );
}
