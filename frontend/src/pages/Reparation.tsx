export default function Reparation() {
  const repairs = [
    {
      title: "Dæk & slanger",
      short: "Punktering, skift og optimering",
      detail: "Vi udskifter dæk og slanger, retter fælge og foreslår dæk der passer til din kørestil. Vi tilbyder også tubeless-opbygning og ekstra punkteringsbeskyttelse."
    },
    {
      title: "Serviceeftersyn",
      short: "Grundigt gennemgang af cyklen/scooteren",
      detail: "Standard service inkluderer smøring, justering af gear og bremser, kontrol af lejer og løse komponenter. Vi tester sikkerhed og anbefaler nødvendige opgraderinger."
    },
    {
      title: "Gear & bremser",
      short: "Justering, udskiftning og opgradering",
      detail: "Vi finjusterer gear, udskifter slidte kabler eller hydraulikvæsker, og optimerer bremseperformance inkl. skive- og fælgbremser."
    },
    {
      title: "Hjul & eger",
      short: "Retning, true og egerudskiftning",
      detail: "Professionel hjulretning og egerudskiftning. Vi sørger for korrekt spænding, centering og langtidsholdbarhed."
    },
    {
      title: "Elektronik & batteri",
      short: "Diagnose og udskiftning",
      detail: "Vi kan fejlfinde elektronik på el-cykler og el-scootere, teste batterier og anbefale eller montere erstatningspakker."
    },
    {
      title: "Montering & tilbehør",
      short: "Lygter, låse, tasker og mere",
      detail: "Montering af tilbehør, rack, tasker, skærme og låse med professionel tilpasning og sikker fastgørelse."
    }
  ];

  const faqs = [
    { q: "Hvor lang tid tager et standard service?", a: "Et standardservice tager typisk 1-3 timer afhængigt af arbejdets omfang. Vi giver et estimat ved aflevering." },
    { q: "Skal jeg booke tid?", a: "Det anbefales at booke for at sikre hurtig ekspedition, men vi tager også drop-ins afhængigt af kapaciteten." },
    { q: "Tilbyder I lånecykel/scooter under reparation?", a: "Vi har et begrænset antal lånecykler afhængigt af typen af reparation — spørg i butikken ved aflevering." },
    { q: "Hvad gør I ved et batteri der mister kapacitet?", a: "Vi tester batteriet, udskifter moduler hvis muligt og rådgiver om batteriudskiftning eller opgradering." }
  ];

  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Reparation & Service</h1>
        <p className="text-gray-600 mb-8">Vores værksted udfører alle typer reparationer for cykler og scootere — her er et overblik over de mest almindelige ydelser. Der vises ikke priser her; kontakt os for en nærmere vurdering.</p>

        {/* Repair overview with hover details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repairs.map((r) => (
            <div key={r.title} className="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-600 mb-4">{r.short}</p>

              <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2 transition-all duration-200 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-700 text-sm">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl p-4 shadow-sm" tabIndex={0}>
                <summary className="font-semibold text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Har du spørgsmål eller ønsker en vurdering?</h3>
          <p className="text-gray-600 mb-6">Vi hjælper gerne — book en tid eller bring dit køretøj ind til en vurdering.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200">
            Kontakt os
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
          <p className="text-sm text-gray-500 mt-3">(Kontaktformular kommer snart — link fører til kontakt-siden.)</p>
        </div>
      </div>
    </section>
  );
}