import logging
from pathlib import Path
from intent_mapper import detect_intent

logger = logging.getLogger(__name__)

BASE_DIR = Path(__file__).resolve().parent
KNOWLEDGE_DIR = BASE_DIR / "knowledge"


def load_text(filename: str) -> str:
    path = KNOWLEDGE_DIR / filename
    if not path.exists():
        logger.warning(f"Knowledge file not found: {filename}")
        return ""
    return path.read_text(encoding="utf-8").strip()


PROFILE_TEXT = load_text("futurelab_profile.txt")
SERVICES_TEXT = load_text("services.txt")
WORKSHOPS_TEXT = load_text("workshops.txt")


def get_response(user_input: str) -> str:
    intent = detect_intent(user_input)
    q = user_input.lower()
    logger.info(f"Detected intent: {intent}")

    # ── COMPANY / OVERVIEW ────────────────────────────────────────────────────
    if intent == "company":
        if "what is" in q or "kind of company" in q:
            return (
                "Futurelab Studios is an AI enablement studio. We help organizations "
                "and individuals adopt artificial intelligence in a practical, "
                "responsible, and meaningful way — combining strategic guidance, "
                "hands-on learning, and custom AI-first tools."
            )
        if "who are you" in q or "about you" in q:
            return (
                "I'm the Futurelab AI Assistant. Futurelab Studios works at the "
                "intersection of technology, education, and product development — "
                "helping teams use AI effectively in real-world scenarios."
            )
        return (
            "Futurelab Studios is a global AI enablement studio focused on practical, "
            "responsible AI adoption. We deliver strategic consulting, hands-on "
            "workshops, and custom AI tools for organizations worldwide."
        )

    # ── SERVICES / CONSULTING ─────────────────────────────────────────────────
    if intent == "services":
        if "consult" in q:
            return (
                "Futurelab offers AI consulting services where we help organizations "
                "identify high-impact use cases, design AI-driven workflows, and "
                "build a structured adoption roadmap aligned with business goals."
            )
        if "automation" in q or "workflow" in q:
            return (
                "We help teams automate and optimize workflows using AI — applying "
                "it to real business challenges with a strong focus on usability, "
                "measurable impact, and long-term sustainability."
            )
        if "solution" in q or "tools" in q:
            return (
                "Futurelab builds custom AI solutions including knowledge chatbots, "
                "voice AI agents, and retrieval-augmented systems that integrate "
                "smoothly into your existing processes and tech stack."
            )
        return (
            "Futurelab's core services include:\n\n"
            "• **AI Strategic Consulting** — use case discovery, roadmapping, adoption planning\n"
            "• **Custom AI Tools** — chatbots, voice agents, RAG systems\n"
            "• **Workflow Automation** — AI-powered process improvement\n"
            "• **Fractional CTO** — on-demand tech leadership\n\n"
            "Would you like to know more about any specific service?"
        )

    # ── WORKSHOPS / TRAINING ──────────────────────────────────────────────────
    if intent == "workshops":
        if "beginner" in q or "essential" in q or "basic" in q:
            return (
                "Our **AI Essentials** workshops are designed for all team members. "
                "They cover AI fundamentals, responsible usage, prompt engineering, "
                "and how to integrate AI into everyday productivity workflows."
            )
        if "advanced" in q or "builder" in q or "deep" in q:
            return (
                "Our **AI Builder** programs are for advanced teams. Participants "
                "prototype and develop real AI tools through guided, hands-on sessions — "
                "from ideation to a working prototype."
            )
        return (
            "Futurelab offers a range of AI workshops:\n\n"
            "• **AI Essentials** — fundamentals for all team members\n"
            "• **Function-Specific Sessions** — tailored for marketing, sales, ops\n"
            "• **AI Builder Programs** — advanced prototyping & hands-on development\n\n"
            "All sessions focus on real-world use cases and responsible AI practices."
        )

    # ── TOOLS / PRODUCTS ──────────────────────────────────────────────────────
    if intent == "tools":
        return (
            "Futurelab builds AI-first products including:\n\n"
            "• **Knowledge Chatbots** — trained on your company's data\n"
            "• **AI Voice Agents** — for customer support, sales, and onboarding\n"
            "• **RAG Systems** — retrieval-augmented generation for accurate Q&A\n"
            "• **Custom AI Workflows** — end-to-end automation solutions\n\n"
            "Every tool is designed for real-world usability and measurable ROI."
        )

    # ── FRACTIONAL CTO ────────────────────────────────────────────────────────
    if intent == "cto":
        return (
            "Through our **Fractional CTO-as-a-Service**, Futurelab provides:\n\n"
            "• On-demand technology leadership\n"
            "• AI strategy and architecture planning\n"
            "• Team capability assessments\n"
            "• Vendor selection and integration oversight\n\n"
            "This gives you senior tech leadership without the overhead of a full-time hire."
        )

    # ── GLOBAL ────────────────────────────────────────────────────────────────
    if intent == "global":
        return (
            "Yes, Futurelab Studios works with clients globally across industries "
            "and regions. Our programs, tools, and consulting services are designed "
            "to be culturally adaptable and organizationally scalable — from "
            "early-stage startups to enterprise organizations worldwide."
        )

    # ── CONTACT ───────────────────────────────────────────────────────────────
    if intent == "contact":
        return (
            "To connect with Futurelab Studios, visit our website and reach out "
            "through the contact form. We're happy to discuss AI workshops, custom "
            "solutions, or strategic support for your organization."
        )

    # ── SMART FALLBACK ────────────────────────────────────────────────────────
    return (
        "Futurelab Studios helps organizations and individuals adopt AI through "
        "training, custom tools, and strategic guidance.\n\n"
        "You can ask me about:\n"
        "• Our **services** and consulting approach\n"
        "• **Workshops** and training programs\n"
        "• Custom **AI tools** we build\n"
        "• Our **global reach** and client work\n"
        "• How to **get started** with Futurelab"
    )
