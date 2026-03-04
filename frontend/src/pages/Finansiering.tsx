
import React from "react";

export default function Finansiering() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fff6f6] via-[#fbeaea] to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero section with Sparxpres logo */}
        <div className="flex flex-col items-center mb-10">
          <img src="/images/sparxpres.png" alt="Sparxpres logo" className="h-16 w-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#BE2B31' }}>Finansiering af cykler & scootere</h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
            Drømmer du om en ny cykel eller scooter? Med vores <span style={{ color: '#BE2B31', fontWeight: 'bold' }}>smarte finansiering</span> kan du betale i dit eget tempo – nem ansøgning, hurtig godkendelse og ingen skjulte gebyrer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
            <a
              href="https://sparxpres.dk/ansoegning/?linkId=117898d5-9b5e-40db-8b9e-dc22cde98da6"
              target="_blank"
              rel="noreferrer"
              className="bg-[#BE2B31] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:bg-[#a51f25] transition-all"
            >
              Ansøg nu
            </a>
            <a
              href="#finansiering-steps"
              className="bg-[#BE2B31]/10 text-[#BE2B31] font-bold py-2 px-6 rounded-xl text-base border border-[#BE2B31]/30 hover:bg-[#BE2B31]/20 transition-all"
            >
              Se hvor nemt det er
            </a>
          </div>
        </div>

        {/* Step-by-step visual */}
        <div id="finansiering-steps" className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-[#BE2B31]/30">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#BE2B31' }}>Så let er det!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2" style={{ color: '#BE2B31' }}>mail</span>
              <span className="font-bold text-lg mb-1" style={{ color: '#BE2B31' }}>1. Udfyld og send ansøgning</span>
              <span className="text-gray-600 text-sm">Online og hurtigt</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2" style={{ color: '#BE2B31' }}>verified_user</span>
              <span className="font-bold text-lg mb-1" style={{ color: '#BE2B31' }}>2. Underskriv med MitID</span>
              <span className="text-gray-600 text-sm">Sikkert og nemt</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2" style={{ color: '#BE2B31' }}>payments</span>
              <span className="font-bold text-lg mb-1" style={{ color: '#BE2B31' }}>3. Lånet udbetales til butikken</span>
              <span className="text-gray-600 text-sm">Du kan hente din cykel/scooter med det samme</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#BE2B31]/10 rounded-2xl shadow-md p-8 mb-10 border border-[#BE2B31]/20">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#BE2B31' }}>Fordele ved finansiering</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Lav månedlig ydelse – betal i dit tempo</li>
            <li>Ingen udbetaling på udvalgte modeller</li>
            <li>Hurtig og nem ansøgningsproces</li>
            <li>Mulighed for afbetaling over 12-60 måneder</li>
            <li>Finansiering af både cykler og scootere</li>
            <li>Godkendt partner: SparXpres</li>
          </ul>
        </div>

        {/* How to apply */}
        <div className="bg-white rounded-2xl p-8 border border-[#BE2B31]/20 mb-10">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#BE2B31' }}>Sådan ansøger du</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Vælg din ønskede cykel eller scooter i butikken</li>
            <li>Ansøg online eller kontakt os for hjælp</li>
            <li>Underskriv med MitID</li>
            <li>Tag din nye cykel eller scooter med hjem samme dag!</li>
          </ol>
          <a href="https://sparxpres.dk/ansoegning/?linkId=117898d5-9b5e-40db-8b9e-dc22cde98da6" target="_blank" rel="noreferrer" className="inline-block mt-6 bg-[#BE2B31] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#a51f25] transition-all">Ansøg nu</a>
        </div>

        {/* Contact box */}
        <div className="bg-[#BE2B31]/5 rounded-2xl shadow p-8 border border-[#BE2B31]/10">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#BE2B31' }}>Spørgsmål?</h2>
          <p className="text-gray-700 mb-4">Har du spørgsmål om finansiering, er du altid velkommen til at kontakte os eller besøge butikken. Vi står klar til at hjælpe dig med at finde den bedste løsning.</p>
          <a href="/kontakt" className="inline-block bg-[#BE2B31] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#a51f25] transition-all">Kontakt os</a>
        </div>
      </div>
    </section>
  );
}
