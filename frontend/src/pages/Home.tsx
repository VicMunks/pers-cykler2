import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState("Tjekker backend...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.text())
      .then((text) => setBackendStatus(text || "OK"))
      .catch(() => setBackendStatus("Backend kan ikke kontaktes"));
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
              Odense's Ældste Cykelhandler
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[0.9] mb-6">
              Kvalitet på <br />
              <span className="text-primary italic">to hjul.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Siden 1985 har Per's Cykler været hjertet af Odense for cykelentusiaster. Vi kombinerer klassisk håndværk med moderne service.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/cykler"
                className="bg-primary text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold hover:shadow-2xl hover:bg-[#4d6556] transition-all flex items-center gap-3"
              >
                Se udvalget
                <span className="material-symbols-outlined">east</span>
              </a>
              <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-secondary">
                    verified
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Systemstatus
                  </p>
                  <p className="font-bold text-sm text-gray-800">
                    {backendStatus}
                  </p>
                </div>
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
              <div className="bg-secondary p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-between transform lg:translate-y-8">
                <div>
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
                <button className="mt-6 md:mt-8 bg-white/20 hover:bg-white/30 py-3 rounded-xl font-bold transition-all text-xs md:text-sm uppercase tracking-widest">
                  Se mere
                </button>
              </div>

              <div className="bg-primary p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6">
                    shopping_basket
                  </span>
                  <h3 className="text-2xl font-bold mb-3 md:mb-4">
                    Udstyr &amp; Tilbehør
                  </h3>
                  <p className="opacity-90 text-sm md:text-base">
                    Hjelme, låse, lygter og tøj. Vi fører kun mærker vi selv kan stå inde for.
                  </p>
                </div>
                <button className="mt-6 md:mt-8 bg-white/20 hover:bg-white/30 py-3 rounded-xl font-bold transition-all text-xs md:text-sm uppercase tracking-widest text-center">
                  Udforsk
                </button>
              </div>

              <div className="md:col-span-2 bg-accent/60 border-2 border-dashed border-primary/20 p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Byt til nyt?
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Vi tager din gamle cykel i bytte og giver en fair pris,
                    når du køber en ny hos os.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="whitespace-nowrap bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold shadow-sm border border-primary/10 text-sm md:text-base"
                >
                  Få et tilbud
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-base relative overflow-hidden mt-4">
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
              Gennem vores partnerskab med SparXpres kan du finansiere din nye cykel eller reparation helt uden udbetaling og med 0% i rente.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">0,-</p>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-1">
                  Udbetaling
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  10 min
                </p>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-1">
                  Svartid
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-secondary text-white px-7 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold hover:scale-105 transition-transform text-sm md:text-base"
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 relative mb-6 lg:mb-0">
            <div className="w-full h-[320px] md:h-[420px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img
                src="/images/shop-front.jpg"
                alt="Facade af Pers Cykler"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-secondary p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-2xl max-w-[220px] md:max-w-xs -rotate-3">
              <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">
                35+
              </p>
              <p className="text-sm md:text-lg font-bold leading-tight">
                Års erfaring med cykler i Odense
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8">
              Et lokalt fikspunkt på Vesterbro
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Per's Cykler startede i en tid, hvor cyklen var byens vigtigste transportmiddel – og det er den stadig. Vi har set Odense udvikle sig, og vi har fulgt med tiden uden at glemme vores rødder.
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
              {/* Placeholder map image – you can replace with an embedded map */}
              <img
                src="/images/map-placeholder.jpg"
                alt="Kort over placering"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
