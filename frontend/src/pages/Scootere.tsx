import { ModelCard } from "../components/ModelCard";

export default function Scootere() {
  const models = [
    {
      name: "30 km/t Scootere",
      description: "Perfekt til byen. Typisk brug: Bykørsel og korte ture. Kan køres med lille knallertkørekort.",
      speed: "Max 30 km/t",
      features: [
        "Pris fra 12.995 kr.",
        "Vægt: 83–96 kg",
        "Benzinmotor, 49,6cc 4-takt, EFI indsprøjtning",
        "Rækkevidde: 150-250 km",
        "Tank: ca. 4,2–6 L",
        "Automatisk gear (CVT)",
        "El-start + kickstart",
        "LED blink/lys, USB-stik",
        "Bagagebærer, digitalt instrument",
        "Skivebremse foran, tromlebremse bag"
      ],
      icon: "🛵",
      color: "#3B82F6",
      link: "https://motocr.dk/lille-knallert-30km-t/"
    },
    {
      name: "45 km/t Scootere",
      description: "Hurtigere transport. Typisk brug: Længere ture og pendling.",
      speed: "Max 45 km/t",
      features: [
        "Pris fra 16.995 kr.",
        "Vægt: 88–108 kg",
        "Benzinmotor, 49,6cc 4-takt, EFI indsprøjtning, 2,9–3 hk",
        "Rækkevidde: 200-300 km",
        "Tank: ca. 5–8,5 L",
        "Større hjul (12\")",
        "Skivebremser, LED lys, USB opladning",
        "Større sæde, bagagebærer",
        "Bedre acceleration end 30 km/t modeller"
      ],
      icon: "🚀",
      color: "#EF4444",
      link: "https://motocr.dk/stor-knallert-45km-t/"
    },
    {
      name: "El-scootere",
      description: "Stille og miljøvenlig. Typisk brug: Stille bykørsel, lav drift.",
      speed: "Max 45 km/t",
      features: [
        "Pris fra 17.495 kr.",
        "Vægt: 70–110 kg",
        "Elektrisk motor (ca. 800-2000W)",
        "Batteri: typisk 48V / 26Ah",
        "Rækkevidde: op til 50 km pr. opladning",
        "Ladetid: ca. 6–8 timer",
        "Meget støjsvag, ingen benzin",
        "Lav vedligeholdelse, USB opladning",
        "Digitalt display, mulighed for 2 batterier (long range)"
      ],
      icon: "⚡",
      color: "#10B981",
      link: "https://motocr.dk/lille-el-knallert-30km-t/"
    }
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img src="/images/motocr.png" alt="MotoCr" className="h-16 md:h-20 w-auto object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Premium Scootere fra MotoCr</h1>
              <p className="text-lg text-gray-600 mb-8">
                MotoCr leverer højtydende scootere til det danske marked — fra økonomiske 30 km/t modeller til kraftfulde 45 km/t varianter. Vi har løsningen til enhver transport-behov.
              </p>
              <a
                href="https://motocr.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 gap-2"
              >
                Besøg MotoCr
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl p-8 border border-blue-200">
              <img src="/images/motocr.png" alt="MotoCr Scootere" className="w-full h-64 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Vores Modeller</h2>
            <p className="text-lg text-gray-600">Tre kategorier tilpasset hver livsstil</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {models.map((model) => {
              const price = model.features.find(f => f.toLowerCase().includes("pris"));
              const weight = model.features.find(f => f.toLowerCase().includes("vægt"));
              const range = model.features.find(f => f.toLowerCase().includes("rækkevidde"));
              return (
                <ModelCard
                  key={model.name}
                  model={model}
                  price={price}
                  weight={weight}
                  range={range}
                />
              );
            })}
          </div>




        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Hvorfor vælge el-scooter?</h2>
            <p className="text-lg text-gray-600">El-scootere bliver mere og mere populære – især til bykørsel og korte ture. De er nemme at bruge, billige i drift og kræver meget lidt vedligeholdelse.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-3xl mb-2">🔇</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Støjsvag og behagelig kørsel</h3>
              <p className="text-gray-600 flex-1">En el-scooter har en elektrisk motor, som næsten ikke larmer. Det giver en mere behagelig køreoplevelse og mindre støj i byen.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-3xl mb-2">💸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Billig i drift</h3>
              <p className="text-gray-600 flex-1">Det koster meget lidt at oplade batteriet sammenlignet med benzin. Du slipper også for mange af de serviceudgifter, som benzinmotorer har.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-3xl mb-2">🔋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nem opladning</h3>
              <p className="text-gray-600 flex-1">Scooteren oplades i en almindelig 220V stikkontakt, og en fuld opladning tager typisk 6-8 timer.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-3xl mb-2">🛠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mindre vedligeholdelse</h3>
              <p className="text-gray-600 flex-1">Der er færre bevægelige dele i en elmotor end i en benzinmotor. Det betyder typisk mindre slid og færre reparationer.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Et mere miljøvenligt valg</h3>
              <p className="text-gray-600 flex-1">El-scootere udleder ikke CO₂ under kørsel og er derfor et mere miljøvenligt alternativ til benzin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories & Customization */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-200">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">🎨 Tilbehør & Personalisering</h2>
            <p className="text-lg text-gray-600 mb-6">
              Farvevalgmuligheder, LED-lys, tasker og beskyttelsesutstyr — kom forbi butikken for at se alt det, du kan tilføje til din scooter.
            </p>
            <a href="https://motocr.dk/tilbehoer/" target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 inline-block">
              Udforsk Tilbehør
            </a>
          </div>
        </div>
      </section>

      {/* Support & Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service & Vedligeholdelse</h3>
              <p className="text-gray-600 mb-6">
                Vi tilbyder fuld servisering og vedligeholdelse af dine el-scootere. Kom forbi eller kontakt os for mere information.
              </p>
              <a href="/kontakt" className="text-blue-600 hover:text-blue-700 font-semibold">Kontakt os →</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garanti & Forsikring</h3>
              <p className="text-gray-600 mb-6">
                Alle modeller kommer med garanti. Vi kan også hjælpe med forsikringsløsninger.
              </p>
              <a href="/kontakt" className="text-blue-600 hover:text-blue-700 font-semibold">Få mere info →</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🧰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reservedele & Tilbehør</h3>
              <p className="text-gray-600 mb-6">
                Vi har altid reservedele og tilbehør på lager – fx ekstra batterier, dæk, lygter og meget mere. Spørg os, hvis du mangler noget til din scooter.
              </p>
              <a href="/kontakt" className="text-blue-600 hover:text-blue-700 font-semibold">Få hjælp →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

