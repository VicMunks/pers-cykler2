import { Link, NavLink, Outlet } from "react-router-dom";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-bold text-gray-700 hover:text-secondary transition-colors",
    isActive ? "text-secondary" : "",
  ]
    .filter(Boolean)
    .join(" ");

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-gray-900">
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass-panel rounded-2xl flex justify-between items-center px-8 py-3 shadow-sm border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-base md:text-lg">
                  directions_bike
                </span>
              </div>
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-primary">
                PERS CYKLER
              </span>
            </div>
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
              <NavLink to="/kontakt" className={navLinkClassName}>
                Kontakt
              </NavLink>
            </nav>
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
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">directions_bike</span>
                </div>
                <span className="text-xl font-bold tracking-tighter">PER'S CYKLER</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Salg og reparation af cykler og scootere i Odense siden 1985. Din sikkerhed på vejen er vores prioritet.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                </a>
                <a className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-secondary transition-colors" href="/cykler">Find en cykel</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/scootere">Reservedele</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/reparation">El-scootere</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/om">Om os</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Service</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-secondary transition-colors" href="/reparation">Book værksted</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#">Prisliste</a></li>
                <li><a className="hover:text-secondary transition-colors" href="/om">Finansiering</a></li>
                <li><a className="hover:text-secondary transition-colors" href="#">Forsikring</a></li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Meld dig til</h4>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Få tips til vedligeholdelse og besked om nye modeller i butikken.</p>
              <div className="relative">
                <input className="w-full bg-gray-800 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Din email" type="email" />
                <button className="absolute right-2 top-2 bottom-2 bg-primary px-3 rounded-lg hover:bg-[#4d6556]">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Per's Cykler ApS. Alle rettigheder forbeholdes.</p>
            <div className="flex gap-8 text-xs text-gray-600">
              <a className="hover:text-white transition-colors" href="#">Privatliv</a>
              <a className="hover:text-white transition-colors" href="#">Handelsbetingelser</a>
              <a className="hover:text-white transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
