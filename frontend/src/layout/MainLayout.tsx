import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-bold text-gray-700 hover:text-secondary transition-colors",
    isActive ? "text-secondary" : "",
  ]
    .filter(Boolean)
    .join(" ");

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-gray-900">
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass-panel rounded-2xl flex justify-between items-center px-8 py-3 shadow-sm border-gray-100">
            <div className="flex items-center">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
                PERS CYKLER
              </span>
            </div>
            {/* Desktop nav */}
            <nav className="hidden lg:flex space-x-8">
              <NavLink to="/" end className={navLinkClassName}>
                Hjem
              </NavLink>
              <NavLink to="/cykler" className={navLinkClassName}>
                Cykler
              </NavLink>
              <NavLink to="/scootere" className={navLinkClassName}>
                Scootere
              </NavLink>
              <NavLink to="/reparation" className={navLinkClassName}>
                Reparation
              </NavLink>
              <NavLink to="/om" className={navLinkClassName}>
                Om
              </NavLink>
              <NavLink to="/finansiering" className={navLinkClassName}>
                Finansiering
              </NavLink>
              <NavLink to="/kontakt" className={navLinkClassName}>
                Kontakt
              </NavLink>
            </nav>
            {/* Burger menu button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 bg-white text-primary"
              aria-label="Åbn menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            {/* Mobile nav */}
            {menuOpen && (
              <nav className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl z-50 flex flex-col items-center py-6 gap-4 lg:hidden">
                <NavLink to="/" end className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Hjem
                </NavLink>
                <NavLink to="/cykler" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Cykler
                </NavLink>
                <NavLink to="/scootere" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Scootere
                </NavLink>
                <NavLink to="/reparation" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Reparation
                </NavLink>
                <NavLink to="/om" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Om
                </NavLink>
                <NavLink to="/finansiering" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Finansiering
                </NavLink>
                <NavLink to="/kontakt" className={navLinkClassName} onClick={() => setMenuOpen(false)}>
                  Kontakt
                </NavLink>
              </nav>
            )}
            <div className="flex items-center gap-4">
              <a
                href="tel:+4566148485"
                className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                66 14 84 85
              </a>
              <Link
                to="/kontakt"
                className="bg-secondary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Book tid
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <footer className="bg-dark-base text-white pt-24 pb-12 overflow-hidden relative">
        <div className="absolute right-0 bottom-0 w-1/2 h-full pattern-dot opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                  <span className="text-xl font-bold tracking-tighter">PERS CYKLER</span>
                </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Salg og reparation af cykler og scootere i Odense siden 1981. Din sikkerhed på vejen er vores prioritet.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com/perscykler/" target="_blank" rel="noreferrer" aria-label="Pers cykler Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-800">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.8 21.16 10.55 21.98v-7.02H8.08v-2.9h2.47V9.41c0-2.44 1.45-3.79 3.67-3.79 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.75-1.57 1.52v1.82h2.67l-.43 2.9h-2.24V21.98C18.2 21.16 22 17.09 22 12.07z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-secondary transition-colors" href="/">Hjem</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/cykler">Cykler</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/scootere">Scootere</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/reparation">Reparation</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/om">Om</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/finansiering">Finansiering</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/kontakt">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Service</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-secondary transition-colors" href="/reparation">Reparation</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/#finansiering">Finansiering</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/kontakt">Byt til nyt</a></li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Følg os</h4>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Følg Pers CYKLER på Facebook for nyheder og tilbud.</p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/perscykler/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.8 21.16 10.55 21.98v-7.02H8.08v-2.9h2.47V9.41c0-2.44 1.45-3.79 3.67-3.79 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.75-1.57 1.52v1.82h2.67l-.43 2.9h-2.24V21.98C18.2 21.16 22 17.09 22 12.07z" />
                  </svg>
                  Følg os på Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Pers cykler ApS. Alle rettigheder forbeholdes.</p>
            <div className="flex gap-8 text-xs text-gray-600">
              <a className="hover:text-white transition-colors" href="#">Privatliv</a>
              <a className="hover:text-white transition-colors" href="#">Handelsbetingelser</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
