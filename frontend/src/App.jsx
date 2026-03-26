import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatView from "./components/ChatView";
import ServicesView from "./views/ServicesView";
import WorkshopsView from "./views/WorkshopsView";
import ContactView from "./views/ContactView";

// ✅ ENV + FALLBACK (BEST PRACTICE)
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://futurelab-ai-assistant-i3fz.onrender.com";

export default function App() {
  const [view, setView] = useState("chat");
  const [messages, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    // Always switch to chat view
    setView("chat");

    // Add user message
    setMsgs((prev) => [
      ...prev,
      {
        role: "user",
        text: msg,
        time: getTime(),
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: msg }),
      });

      if (!response.ok) {
        throw new Error("API response failed");
      }

      const data = await response.json();

      // Add assistant reply
      setMsgs((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
          time: getTime(),
        },
      ]);
    } catch (error) {
      // Error fallback UI
      setMsgs((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "⚠️ Unable to connect to the AI service. Please try again in a moment.",
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
      {/* Sidebar Navigation */}
      <Sidebar active={view} onNav={setView} />

      {/* Main Content */}
      <div className="main-panel">
        <Topbar view={view} />

        {/* Chat View */}
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

        {/* Other Views */}
        {view === "services" && <ServicesView />}
        {view === "workshops" && <WorkshopsView />}
        {view === "contact" && <ContactView onNav={setView} />}
      </div>
    </div>
  );
}
