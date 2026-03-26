import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatView from "./components/ChatView";
import ServicesView from "./views/ServicesView";
import WorkshopsView from "./views/WorkshopsView";
import ContactView from "./views/ContactView";

const API_URL = "http://localhost:8000";

export default function App() {
  const [view, setView]       = useState("chat");
  const [messages, setMsgs]   = useState([]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);

  const getTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    // Switch to chat view when sending
    setView("chat");

    setMsgs((p) => [...p, { role: "user", text: msg, time: getTime() }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMsgs((p) => [...p, { role: "assistant", text: data.reply, time: getTime() }]);
    } catch {
      setMsgs((p) => [
        ...p,
        {
          role: "assistant",
          text: "Cannot connect to the backend. Make sure it's running on port 8000.",
          time: getTime(),
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Sidebar active={view} onNav={setView} />

      <div className="main-panel">
        <Topbar view={view} />

        {view === "chat" && (
          <ChatView
            messages={messages}
            loading={loading}
            input={input}
            setInput={setInput}
            onSend={sendMessage}
            onSuggest={sendMessage}
          />
        )}
        {view === "services"  && <ServicesView />}
        {view === "workshops" && <WorkshopsView />}
        {view === "contact"   && <ContactView onNav={setView} />}
      </div>
    </div>
  );
}
