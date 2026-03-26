def detect_intent(user_input: str) -> str:
    q = user_input.lower()

    # 1. Automation / workflows
    if any(k in q for k in [
        "automate", "automation", "workflow", "workflows",
        "business workflows", "process automation", "using ai"
    ]):
        return "services"

    # 2. Services / solutions / consulting
    if any(k in q for k in [
        "services", "ai services", "solutions", "what do you offer",
        "what do you provide", "ai solutions", "consulting",
        "consult", "ai adoption", "adopt ai"
    ]):
        return "services"

    # 3. Workshops / training
    if any(k in q for k in [
        "workshop", "training", "ai workshops", "ai training",
        "learning", "enablement"
    ]):
        return "workshops"

    # 4. Tools / products
    if any(k in q for k in [
        "chatbot", "custom ai tools", "voice agent", "voice assistant",
        "rag", "knowledge bot", "ai tools", "products", "build"
    ]):
        return "tools"

    # 5. Fractional CTO
    if any(k in q for k in [
        "fractional cto", "cto service", "technology leadership",
        "tech strategy", "cto"
    ]):
        return "cto"

    # 6. Global reach
    if any(k in q for k in [
        "global", "worldwide", "international", "countries", "regions"
    ]):
        return "global"

    # 7. Contact
    if any(k in q for k in [
        "contact", "reach out", "get in touch", "email", "connect"
    ]):
        return "contact"

    # 8. Company overview (keep last)
    if any(k in q for k in [
        "futurelab", "futurelab studios", "company", "about",
        "who are you", "what kind of company", "what is futurelab"
    ]):
        return "company"

    return "general"
