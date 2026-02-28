## Pers Cykler – Local development

### Backend (ASP.NET Core)

- **Requirements**: .NET SDK 10
- **Start the API**:
  - From the project root run:
    - `dotnet run --project backend/backend.csproj`
  - The API listens on `http://localhost:5078` (see `backend/Properties/launchSettings.json`).
- **Health check**:
  - `GET http://localhost:5078/api/health` should return `OK`.

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

