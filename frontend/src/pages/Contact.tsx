import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("RCrbNpyddjkxNAEzQ");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      await emailjs.sendForm(
        "service_5t6wuwc",
        "template_1bvosin",
        form
      );
      
      setStatus("Sendt! Vi vender tilbage snarest.");
      form.reset();
    } catch (err: any) {
      setStatus(`Fejl: ${err.message || "Kunne ikke sende besked"}`);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Kontakt</h1>
        <p className="text-gray-600">Har du brug for hjælp til din cykel eller vil du booke et eftersyn? Brug formularen eller kontakt os direkte.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-2">Kontaktoplysninger</h2>
            <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Telefon:</span> <a href="tel:66148485" className="text-blue-600">66 14 84 85</a></p>
            <p className="text-sm text-gray-700"><span className="font-semibold">E-mail:</span> <a href="mailto:info@perscykler.dk" className="text-blue-600">info@perscykler.dk</a></p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-1">Åbningstider</h3>
              <p className="text-sm text-gray-700">Man-Fre 10-17, Lør 10-13</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-2">Adresse</h2>
            <p className="text-sm text-gray-700">Pers cykler<br/>Vesterbro 95<br/>5000 Odense C</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Send os en besked</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input name="name" required placeholder="Navn" className="border border-gray-200 rounded-md p-2" />
              <input name="time" type="email" required placeholder="E-mail" className="border border-gray-200 rounded-md p-2" />
            </div>
            <input name="title" placeholder="Emne" className="w-full border border-gray-200 rounded-md p-2 mb-3" />
            <textarea name="message" required placeholder="Din besked" rows={5} className="w-full border border-gray-200 rounded-md p-2 mb-3" />
            <div className="flex items-center gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Send besked</button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </form>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Find os</h3>
            <div className="w-full h-64 rounded-md overflow-hidden border border-gray-100">
              <iframe
                title="Pers cykler - kort"
                className="w-full h-full"
                src="https://www.google.com/maps?q=Vesterbro%2095%2C%205000%20Odense&output=embed"
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-3">Brug knappen ovenfor til at åbne kortet i Google Maps.</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">Du er altid velkommen til at kigge forbi i åbningstiden med din cykel – tidsbestilling er ikke nødvendig til mindre reparationer.</p>
      </div>
    </section>
  );
}

