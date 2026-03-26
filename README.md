# Futurelab AI Assistant

> A production-ready customer-facing AI chatbot for Futurelab Studios — built with FastAPI + React + Vite.

## 🚀 Live Demo

- 🌐 **Frontend (Vercel):**  
  https://futurelabassistant.vercel.app/

- ⚙️ **Backend API (Render):**  
  https://futurelab-ai-assistant-i3fz.onrender.com
---

## Overview

A full-stack AI assistant that handles customer queries about Futurelab Studios using intent-based routing. The backend processes natural language inputs and returns structured, context-aware responses from a knowledge base. The frontend delivers a premium dark-themed SaaS experience.

**Stack:**
- **Backend:** Python 3.10 · FastAPI · Uvicorn
- **Frontend:** React 18 · Vite · CSS Variables
- **Architecture:** Intent detection → Knowledge routing → Structured response

---

## Project Structure

```
futurelab-ai-assistant/
├── backend/
│   ├── main.py              # FastAPI app, CORS, /chat endpoint
│   ├── chatbot_engine.py    # Core response logic
│   ├── intent_mapper.py     # Keyword-based intent detection
│   ├── knowledge/
│   │   ├── futurelab_profile.txt
│   │   ├── services.txt
│   │   └── workshops.txt
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── styles.css
│       └── components/
│           ├── Header.jsx
│           ├── ChatWindow.jsx
│           └── MessageBubble.jsx
└── README.md
```

---

## Setup & Run

### Backend

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Backend runs at: `http://localhost:8000`
API docs at: `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## API

### POST /chat

**Request:**
```json
{ "message": "Tell me about your services" }
```

**Response:**
```json
{ "reply": "Futurelab's core services include..." }
```

---

## Architecture

```
User Input
    ↓
intent_mapper.py   ← keyword matching → intent label
    ↓
chatbot_engine.py  ← intent + sub-conditions → response string
    ↓
FastAPI /chat      ← HTTP POST → JSON response
    ↓
React Frontend     ← renders bubble with formatted text
```

**Intent categories:** `company`, `services`, `workshops`, `tools`, `cto`, `global`, `contact`, `general`

---

## Deployment

### Backend → Render

1. Push `backend/` to a GitHub repo
2. Create a new **Web Service** on [render.com](https://render.com)
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Frontend → Vercel

1. Push `frontend/` to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Set environment variable: `VITE_API_URL=https://your-render-url.onrender.com`
4. Update `App.jsx` line: `const API_URL = import.meta.env.VITE_API_URL;`
5. Deploy — Vercel auto-detects Vite

---

## Features

- Intent-based response routing (8 categories)
- Suggested prompt chips on welcome screen
- Animated typing indicator
- Message timestamps
- Auto-scroll to latest message
- Inline **bold** markdown rendering
- Error state with helpful message
- Mobile responsive layout
- Premium dark SaaS UI (Obsidian + Cyan)
