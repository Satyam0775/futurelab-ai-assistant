import { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

const SUGGESTED = [
  "What does Futurelab do?",
  "Tell me about your services",
  "Explain the workshops",
  "What AI tools do you build?",
  "Do you work globally?",
];

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <path d="M1 1.5L13.5 7.5L1 13.5V8.5L10 7.5L1 6.5V1.5Z" />
  </svg>
);

export default function ChatView({ messages, loading, input, setInput, onSend, onSuggest }) {
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend();
  };

  return (
    <>
      {/* Messages */}
      <div className="chat-body">
        {messages.length === 0 && (
          <div className="welcome">
            <div className="welcome-eyebrow">Futurelab Studios</div>
            <h1 className="welcome-headline">
              Your AI guide to<br /><em>intelligent</em> adoption
            </h1>
            <p className="welcome-body">
              Ask me about Futurelab's services, workshops, or custom AI tools.
              I'm here to help your organization navigate the AI landscape.
            </p>
            <div className="chips-label">Quick questions</div>
            <div className="chips">
              {SUGGESTED.map((s) => (
                <button key={s} className="chip" onClick={() => onSuggest(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}

        {loading && (
          <div className="typing-row">
            <div className="msg-meta">Futurelab AI</div>
            <div className="typing-bubble">
              <span className="td" /><span className="td" /><span className="td" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="input-bar">
        <form onSubmit={handleSubmit}>
          <div className="input-shell">
            <input
              ref={inputRef}
              className="input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, workshops, AI tools…"
              autoFocus
            />
            <button
              className="send-btn"
              type="submit"
              disabled={loading || !input.trim()}
            >
              <SendIcon />
            </button>
          </div>
        </form>
        <div className="input-hint">Press Enter to send · Powered by Futurelab AI</div>
      </div>
    </>
  );
}
