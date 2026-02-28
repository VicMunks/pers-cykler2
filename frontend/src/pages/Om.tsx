export default function Om() {
  const staff = [
    {
      name: "Per Magnussen",
      role: "Indehaver",
      img: "/images/per.png",
      bio: "Per har drevet butikken siden 1981. Han elsker klassiske cykler og giver altid en god, personlig rådgivning."
    },
    {
      name: "Mikkel Rasmussen",
      role: "Cykelmekaniker",
      img: "/images/mikkel.png",
      bio: "Mikkel er specialist i gear og bremser og står for de fleste serviceeftersyn i værkstedet."
    },
    {
      name: "Thomas Magnussen",
      role: "Scootermekaniker",
      img: "/images/thomas.png",
      bio: "Thomas har fokus på scootere og elektronik — batteritjek og fejlfinding er hans kernekompetence."
    }
  ];

  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Om os</h1>

        <p className="text-gray-600 mb-6">Per's Cykler har eksisteret siden 1981 under samme ejer. Vi er en traditionsrig forretning, der hjælper hele familien med kvalitetscykler og scootere — fra daglig pendling til fritidsbrug.</p>

        <p className="text-gray-600 mb-6">Vi tilbyder et bredt udvalg af mærker, reservedele og professionel vejledning, og vores værksted klarer både simple reparationer og større eftersyn. Kom forbi til en snak — vi giver gerne råd om hvad der passer til dine behov.</p>

        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Medarbejdere</h2>
          <p className="text-gray-600 mb-6">Mød holdet der står for salg, service og reparation. Hold musen over et kort for at se en kort bio.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((s) => (
              <div key={s.name} className="relative group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="p-6 flex flex-col items-center text-center">
                  <img src={s.img} alt={s.name} className="w-28 h-28 rounded-full object-cover mb-4" />
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.role}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="text-gray-700 text-sm">{s.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Butik & Åbningstider</h3>
          <p className="text-gray-600">Adresse: Vesterbro 12, 5000 Odense (eksempeladresse)</p>
          <p className="text-gray-600">Åbningstider: Man-Fre 10-17, Lør 10-13</p>
          <p className="text-gray-600 mb-4">Telefon: <a href="tel:12345678" className="text-blue-600">12 34 56 78</a></p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">Kontakt os <span className="material-symbols-outlined">arrow_right_alt</span></a>
        </div>
      </div>
    </section>
  );
}