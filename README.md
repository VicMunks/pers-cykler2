# Pers cykler – Web Platform

Modern hjemmeside for Pers cykler — Odense's ældste cykelhandler siden 1981.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS
- **Hosting**: Vercel (frontend only)
- **Email**: EmailJS (kontaktformular)

## Getting Started

### Requirements

- Node.js 20+
- npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output written to `frontend/dist`.

## Pages

- **Home** — Landing page with overview (contains sections for financing, ABUS locks and a Google map; the top‑hero and ABUS images are referenced as `/images/bike-hero.jpg` and `/images/abus-lock.jpg` and should be added to `frontend/public/images` or replaced with your own URLs)
- **Cykler** — Bicycle brands and types
- **Scootere** — Electric scooter models (MotoCr)
- **Reparation** — Service & repair overview with FAQ
- **Om** — About the shop and staff
- **Kontakt** — Contact form (EmailJS) + Google Maps + info

## Contact Form

The contact form uses **EmailJS** to send messages directly from the frontend. Configuration:

- **Public Key**: `RCrbNpyddjkxNAEzQ`
- **Service ID**: `service_5t6wuwc`
- **Template ID**: `template_1bvosin`
- **Recipient**: `victor.munk1234@gmail.com`

Messages are sent via EmailJS without a backend server.

## Future Enhancements

When implementing a product catalog with admin features, consider:
- **Supabase** for serverless database + authentication
- **Real-time syncing** for inventory updates
- **Shopping cart** functionality (for future e-commerce)

## Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch.

Ensure SPA routing is configured in `frontend/vercel.json`.

