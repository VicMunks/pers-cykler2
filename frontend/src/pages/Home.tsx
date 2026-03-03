import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// business hours configuration (24h)
const standardHours: Record<string, [number, number] | null> = {
  mon: [8, 17],
  tue: [8, 17],
  wed: [8, 17],
  thu: [8, 17],
  fri: [8, 17],
  sat: [10, 13],
  sun: null,
};

// placeholder for occasional special days (override standard hours)
const specialHours: Record<string, [number, number] | null> = {
  // e.g. "2026-12-24": [10, 14]
};

function formatHour(h: number) {
  const hh = Math.floor(h).toString().padStart(2, "0");
  const mm = h % 1 === 0 ? "00" : Math.round((h % 1) * 60).toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

function getNextOpenMessage(now = new Date()) {
  // find next day with opening hours; return human friendly Danish message
  for (let i = 0; i < 14; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const weekday = d.toLocaleDateString("en-US", { weekday: "short" }).toLowerCase();
    const hours = specialHours[key] ?? standardHours[weekday];
    if (!hours) continue;

    const openAt = hours[0];
    if (i === 0) {
      // today
      const h = now.getHours() + now.getMinutes() / 60;
      if (h < openAt) return `Åbner i dag kl ${formatHour(openAt)}`;
      // already open or closing later - no message
      return "Åben nu";
    }

    if (i === 1) return `Åbner i morgen kl ${formatHour(openAt)}`;
    const weekdayName = d.toLocaleDateString("da-DK", { weekday: "long" });
    const cap = weekdayName.charAt(0).toUpperCase() + weekdayName.slice(1);
    return `Åbner på ${cap} kl ${formatHour(openAt)}`;
  }
  return "Ingen åbning registreret";
}

function isOpen(now = new Date()) {
  const key = now.toISOString().slice(0,10); // yyyy-mm-dd
  const day = now.toLocaleDateString("en-US", { weekday: "short" }).toLowerCase();
  const hours = specialHours[key] ?? standardHours[day];
  if (!hours) return false;
  const h = now.getHours() + now.getMinutes()/60;
  return h >= hours[0] && h < hours[1];
}

export default function Home() {
  const [open, setOpen] = useState(isOpen());
  const [hoverMsg, setHoverMsg] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setOpen(isOpen()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <section className="relative min-h-[70vh] flex items-center pt-8 md:pt-16 overflow-hidden">
        <div className="absolute right-0 top-0 w-2/3 h-full hero-clip z-0 hidden md:block">
          <div className="absolute inset-0 bg-primary/25 z-10" />
          <img
            src="/images/bike-hero.jpg"
            alt="Cykelværksted"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 pattern-dot opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-accent text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Eksisteret siden 1981
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[0.9] mb-6">
              Kvalitet på <br />
              <span className="text-primary italic">to hjul.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Siden 1981 har Pers cykler været hjertet af Odense for cykelentusiaster. Vi kombinerer klassisk håndværk med moderne service.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/cykler"
                className="bg-primary text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold hover:shadow-2xl hover:bg-[#4d6556] transition-all flex items-center gap-3"
              >
                Se udvalget
                <span className="material-symbols-outlined">east</span>
              </a>
              <div
                onMouseEnter={() => setHoverMsg(getNextOpenMessage(new Date()))}
                onMouseLeave={() => setHoverMsg(null)}
                className={`relative flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-gray-100 ${open ? "ring-2 ring-green-500" : "ring-2 ring-red-500"}`}
              >
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-secondary">
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Tilgængelighed
                  </p>
                  <p className="font-bold text-sm text-gray-800">
                    {open ? "Åben nu" : "Lukket"}
                  </p>
                </div>
                {hoverMsg && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
                    {hoverMsg}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-5 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-50 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    build
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  Professionelt værksted
                </h2>
                <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Vores mekanikere har årtiers erfaring. Vi klarer alt fra lapning af hverdagscyklen til service af high-end racere.
                </p>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  <li className="flex items-center gap-3 font-medium text-gray-700">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    Dag-til-dag service
                  </li>
                  <li className="flex items-center gap-3 font-medium text-gray-700">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    Lånecykel til rådighed
                  </li>
                </ul>
                <Link
                  to="/reparation"
                  className="text-primary font-extrabold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Book reparation
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-between transform lg:translate-y-8 relative overflow-hidden group hover:bg-secondary/90 transition-colors">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-secondary/80 rounded-full group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6">
                    moped
                  </span>
                  <h3 className="text-2xl font-bold mb-3 md:mb-4">
                    Scootere &amp; Dele
                  </h3>
                  <p className="opacity-90 text-sm md:text-base">
                    Vi er specialister i scootere. Salg, service og et kæmpe lager af reservedele.
                  </p>
                </div>
                <Link to="/scootere" className="mt-6 md:mt-8 bg-white/20 hover:bg-white/30 py-3 rounded-xl font-bold transition-all text-xs md:text-sm uppercase tracking-widest text-center relative z-10">
                  Se mere
                </Link>
              </div>

              <div className="bg-primary p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden group hover:bg-primary/90 transition-colors">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-primary/80 rounded-full group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6">
                    swap_horiz
                  </span>
                  <h3 className="text-2xl font-bold mb-3 md:mb-4">
                    Byt til nyt
                  </h3>
                  <p className="opacity-90 text-sm md:text-base">
                    Vi tager din gamle cykel i bytte og giver en fair pris, når du køber en ny.
                  </p>
                </div>
                <Link
                  to="/kontakt"
                  className="mt-6 md:mt-8 bg-white/20 hover:bg-white/30 py-3 rounded-xl font-bold transition-all text-xs md:text-sm uppercase tracking-widest text-center relative z-10"
                >
                  Kontakt os for tilbud
                </Link>
              </div>

              <div className="md:col-span-2 bg-accent/60 border-2 border-dashed border-primary/20 p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 md:gap-8 group hover:scale-[1.01] transition-transform">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Gratis montering af lygter
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Køb en ny cykel hos os, så monterer vi lygter uden beregning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="finansiering" className="py-20 bg-dark-base relative overflow-hidden mt-4">
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none pattern-dot" />
        <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                Smart finansiering
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Cyklen du drømmer om,
              <br />
              <span className="text-secondary">betalt i dit tempo.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Finansiering sker gennem <a className="underline" href="https://sparxpres.dk/ansoegning/?linkId=117898d5-9b5e-40db-8b9e-dc22cde98da6" target="_blank" rel="noreferrer">SparXpres</a> – nem ansøgning og hurtig godkendelse.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="font-bold text-white text-3xl">1.</span>
                <p className="text-white">Udfyld ansøgningen online.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-white text-3xl">2.</span>
                <p className="text-white">Underskriv med MitID.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-white text-3xl">3.</span>
                <p className="text-white">Pengene udbetales direkte til butikken.</p>
              </div>
            </div>
            <a
              href="https://sparxpres.dk/ansoegning/?linkId=117898d5-9b5e-40db-8b9e-dc22cde98da6"
              className="inline-flex items-center gap-3 bg-secondary text-white px-7 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold hover:scale-105 transition-transform text-sm md:text-base"
              target="_blank"
              rel="noreferrer"
            >
              Ansøg nu
              <span className="material-symbols-outlined">launch</span>
            </a>
          </div>

          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <span className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter italic">
                  SPARXPRES
                </span>
                <div className="bg-primary/10 text-primary px-3 md:px-4 py-1.5 rounded-full text-[0.65rem] md:text-xs font-bold">
                  GODKENDT PARTNER
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                    <span className="material-symbols-outlined">credit_card</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      Lån op til 20.000 kr.
                    </p>
                    <p className="text-sm text-gray-500">
                      Gælder alle cykler og el-scootere i butikken.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                    <span className="material-symbols-outlined">
                      event_repeat
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Valgfri løbetid</p>
                    <p className="text-sm text-gray-500">
                      Vælg mellem 12, 24 eller 36 måneder.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 flex items-center justify-between gap-3">
                <span className="text-gray-400 text-[0.7rem] md:text-xs italic">
                  * Forudsætter kreditgodkendelse
                </span>
                <span className="text-[0.7rem] md:text-xs text-gray-400">
                  Læs mere i butikken
                </span>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-52 h-52 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* ABUS lock promo section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Låser du din cykel?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Vi forhandler ABUS-låse – anerkendt som nogle af de sikreste på markedet. Et lille ekstra beløb kan spare dig for en stor ærgrelse.
            </p>
            <a
              href="http://www.tryg.dk/forebyg-skade/trygitrafikken/index.html"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:shadow-lg transition-all"
              target="_blank"
              rel="noreferrer"
            >
              Hør mere
              <span className="material-symbols-outlined">east</span>
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/abus.png"
              alt="ABUS cykellås"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 relative mb-6 lg:mb-0">
            <div className="w-full h-[320px] md:h-[420px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img
                  src="/images/shop-front.jpg"
                  alt="Facade af Pers cykler"
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-secondary p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-2xl max-w-[220px] md:max-w-xs -rotate-3">
                <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">
                45+
              </p>
              <p className="text-sm md:text-lg font-bold leading-tight">
                Års erfaring med cykler i Odense
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8">
              Et lokalt fikspunkt i Odense
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Pers cykler startede i en tid, hvor cyklen var byens vigtigste transportmiddel – og det er den stadig. Vi har set Odense udvikle sig, og vi har fulgt med tiden uden at glemme vores rødder.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Når du træder ind i vores butik, møder du ikke bare en sælger, men en fagmand der brænder for mekanikken og den gode køreoplevelse.
            </p>
            <div className="flex flex-wrap gap-10 items-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  10k+
                </p>
                <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Kunder hjulpet
                </p>
              </div>
              <div className="w-px h-12 bg-gray-100 hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  100%
                </p>
                <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Lokalt ejet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
            <div className="lg:w-1/3 p-8 md:p-12 bg-primary text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10">
                Kig forbi
              </h2>
              <div className="space-y-8 md:space-y-10 text-sm md:text-base">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresse</h3>
                    <p className="opacity-80">
                      Vesterbro 95
                      <br />
                      5000 Odense C
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    schedule
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Åbningstider</h3>
                    <div className="grid grid-cols-2 gap-x-4 opacity-80 text-xs md:text-sm">
                      <span>Man–Tor:</span> <span>10:00 – 17:00</span>
                      <span>Fredag:</span> <span>10:00 – 16:30</span>
                      <span>Lørdag:</span> <span>10:00 – 12:00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    alternate_email
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Kontakt</h3>
                    <p className="opacity-80">Tlf: 66 14 84 85</p>
                    <p className="opacity-80">info@perscykler.dk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-6">
                  <a href="https://www.facebook.com/perscykler/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.8 21.16 10.55 21.98v-7.02H8.08v-2.9h2.47V9.41c0-2.44 1.45-3.79 3.67-3.79 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.75-1.57 1.52v1.82h2.67l-.43 2.9h-2.24V21.98C18.2 21.16 22 17.09 22 12.07z" />
                    </svg>
                    Følg os på Facebook
                  </a>
                </div>
              </div>
              <div className="mt-10 md:mt-16">
                <a
                  href="https://maps.google.com/maps/place/Vesterbro+95,+5000+Odense+C"
                  className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">
                    share_location
                  </span>
                  Find rutevejledning
                </a>
              </div>
            </div>
            <div className="lg:w-2/3 h-[320px] md:h-[420px] lg:h-auto min-h-[320px]">
              {/* Embeded Google Map for location */}
                <iframe
                title="Pers cykler location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.4724729142067!2d10.375494915688495!3d55.397621980517695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c93c8ca3f9211%3A0x72b84a23737e88ee!2sVesterbro%2095%2C%205000%20Odense%20C!5e0!3m2!1sen!2sdk!4v1709381234567"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
