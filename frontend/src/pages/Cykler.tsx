export default function Cykler() {
  const brands = [
    { name: "Nishiki", image: "/images/nishiki.png", color: "#000000", url: "https://nishiki.dk/", types: ["Touring","Hybrid","Road","Mountainbike","Urban Power","Bombardier","Reno Nexus","Timbuk","El-cykler"] },
    { name: "MBK", image: "/images/mbk.png", color: "#42BEFB", url: "https://mbkcykler.dk/", types: ["Street","Fitness","City","Retro","MTB","DNA","Shopping","Kids","El-cykler"] },
    { name: "Winther", image: "/images/winther.png", color: "#1F448D", url: "https://winthercyk.dk/", types: ["Shopping","City","Cargo","Pige-dreng-junior","MBK","Centurion","Nishiki","El-cykler m.m."] },
    { name: "Raleigh", image: "/images/raleigh.png", color: "#D08050", url: "https://raleigh.dk/", types: ["Classic","Nottingham","Shopping","Elegance","Maxinette","Society","Trent","Conyout","Sidor","Tourist","Glorie","El-cykler"] },
    { name: "Centurion", image: "/images/centurion.png", color: "#E30613", url: "https://centurion.dk/", types: ["Retro","Sport","City","Mountainbike","El-cykler"] },
    { name: "Everton", image: "/images/everton.png", color: "#7A2812", url: "https://everton.dk/", types: ["Classic","El-cykler","Bycykler","Mountainbike"] },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fafaf9] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Vores Cykeludvalg</h1>
          <p className="text-lg text-gray-600 max-w-2xl">Vi fører et kurateret udvalg af mærker — klik et kort for at se typer eller læs mere i butikken.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <article key={brand.name} className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
              {/* Title image only (no border) */}
              <div className="mb-4 flex items-center">
                <img src={brand.image} alt={brand.name} className="h-12 md:h-16 w-auto max-w-full object-contain" />
              </div>

              <div className="mb-4 flex-1">
                <p className="text-sm text-gray-500 mb-2">Populære typer</p>
                <div className="flex flex-wrap gap-2">
                  {brand.types.map((t) => (
                    <span key={t} className="text-sm font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: brand.color, color: brand.color, backgroundColor: `${brand.color}10` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button anchored to bottom */}
              <div className="mt-auto pt-4">
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex text-white font-bold py-3 rounded-xl items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: brand.color }}
                  aria-label={`Læs mere om ${brand.name}`}>
                  Læs mere
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}