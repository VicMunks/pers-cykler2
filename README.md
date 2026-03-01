## Pers Cykler – Local development

### Backend (ASP.NET Core)

- **Requirements**: .NET SDK 10
- **Start the API**:
  - From the project root run:
    - `dotnet run --project backend/backend.csproj`
  - The API listens on `http://localhost:5078` (see `backend/Properties/launchSettings.json`).
- **Health check**:
  - `GET http://localhost:5078/api/health` should return `OK`.

- **Kontakt-API**:
  - `POST http://localhost:5078/api/contact` accepts JSON `{ name, email, subject, message }` and will attempt to send an email.
  - Configuration is driven by environment variables:
    - `SMTP_HOST` (default `smtp.gmail.com`)
    - `SMTP_PORT` (default `587`)
    - `SMTP_USER` / `SMTP_PASS` – credentials for the SMTP server
    - `CONTACT_TO` – e‑mail address to receive messages (defaults to `victor.munk1234@gmail.com` for testing)
    - If credentials are omitted, the mail is sent without authentication which may work on local SMTP relay.

### Frontend (React + Vite)

- **Requirements**: Node.js 20+ and npm
- **Install dependencies**:
  - From the project root:
    - `cd frontend`
    - `npm install`
- **Run in dev mode**:
  - `npm run dev`
  - Open the printed local URL (usually `http://localhost:5173`).
  - The Vite dev server proxies API calls from `/api/*` to `http://localhost:5078`, so the Home page can call `/api/health`.
- **Build for production**:
  - `npm run build`
  - Output is written to `frontend/dist`.

