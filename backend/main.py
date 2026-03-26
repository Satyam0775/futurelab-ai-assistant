import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot_engine import get_response

# ─── Logging ──────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger = logging.getLogger(__name__)

# ─── App ──────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Futurelab AI Assistant",
    description="Customer-facing AI assistant for Futurelab Studios",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Schemas ──────────────────────────────────────────────────────────────────
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

# ─── Routes ───────────────────────────────────────────────────────────────────
@app.get("/")
def health():
    logger.info("Health check hit")
    return {"status": "Futurelab AI Assistant backend running", "version": "1.0.0"}

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    if not req.message or not req.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    logger.info(f"User message: {req.message!r}")
    reply = get_response(req.message)
    logger.info(f"Bot reply: {reply!r}")
    return ChatResponse(reply=reply)
