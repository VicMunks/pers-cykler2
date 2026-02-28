export default function Scootere() {
  const models = [
    {
      name: "30 km/t Scootere",
      description: "Perfekt til kortere ture rundt i byen. Sikker og responsiv.",
      speed: "Max 30 km/t",
      features: ["Dansk godkendelse", "Batterikapacitet: 25-30 km", "Vægt: fra 10 kg", "Fuldt ledelsesbar"],
      icon: "⚡",
      color: "#3B82F6"
    },
    {
      name: "45 km/t Scootere",
      description: "Længere rækkevidde og mere kraft. Ideal til daglig transport.",
      speed: "Max 45 km/t",
      features: ["Kraftigere motor", "Batterikapacitet: 45-60 km", "Vægt: 13-16 kg", "Dobbelt bremsesystem"],
      icon: "🚀",
      color: "#EF4444"
    },
    {
      name: "El-scootere",
      description: "Topmodeller med avanceret teknologi og maksimal komfort.",
      speed: "Max 45 km/t+",
      features: ["Digitalt display", "Smart suspension", "Batterikapacitet: 60+ km", "App-kontrol & GPS"],
      icon: "🔋",
      color: "#10B981"
    }
  ];

  const benefits = [
    { title: "Bæredygtig", description: "Nul emissioner - miljøvenligt transport" },
    { title: "Økonomisk", description: "Lav vedligeholdelse og driftomkostninger" },
    { title: "Fleksibel", description: "Smart opbevaring og let at transportere" },
    { title: "Sikker", description: "Godkendt sikkerhed og pålidelig performance" }
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
                href="https://motocr.com"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <article key={model.name} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="text-4xl mb-4">{model.icon}</div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4 flex-1">{model.description}</p>

                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: `${model.color}10`, borderLeft: `4px solid ${model.color}` }}>
                  <p className="font-bold text-gray-900">{model.speed}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase">Vigtigste features</p>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-xl leading-none mt-0.5" style={{ color: model.color }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: model.color }}
                >
                  Se priser
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Hvorfor Vælge el-scootere?</h2>
            <p className="text-lg text-gray-600">Moderne transport for det moderne liv</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories & Customization Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-200">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">🎨 Tilbehør & Personalisering</h2>
            <p className="text-lg text-gray-600 mb-6">
              Farvevalgmuligheder, LED-lys, tasker og beskyttelsesutstyr — kom forbi butikken for at se alt det, du kan tilføje til din scooter.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200">
              Udforsk Tilbehør
            </button>
          </div>
        </div>
      </section>

      {/* Support & Service Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service & Vedligeholdelse</h3>
              <p className="text-gray-600 mb-6">
                Vi tilbyder fuld servisering og vedligeholdelse af dine el-scootere. Kom forbi eller kontakt os for mere information.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Kontakt os →</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garanti & Forsikring</h3>
              <p className="text-gray-600 mb-6">
                Alle modeller kommer med garanti. Vi kan også hjælpe med forsikringsløsninger.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Få mere info →</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">App & Smart Features</h3>
              <p className="text-gray-600 mb-6">
                Nogle af vores modeller kan kontrolleres via app. Spørg os om hvilke features der passer dig.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Læs mere →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}