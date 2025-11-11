import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const cities = [
    "Antwerpen",
    "Brussel",
    "Aalst",
    "Brugge",
    "Hasselt",
    "Mechelen",
    "Gent",
    "Leuven",
    "Kortrijk",
    "Genk",
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Image
                  src="/acidlogo.png"
                  alt="ACID Logo"
                  width={180}
                  height={180}
                  className="drop-shadow-lg"
                  priority
                />
              </div>
            </div>



            {/* Tagline */}
            <div className="space-y-2 mb-8">
              <p className="text-lg md:text-xl font-semibold text-gray-700 uppercase tracking-wider">
                Non-Alcoholic Aperitif
              </p>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                Ready to Drink • Vinegar Based • Spicy
              </p>
            </div>

            {/* Launch Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-pink-200 text-gray-900 px-5 py-1.5 rounded-full shadow-sm mb-8">
              <span className="text-[10px] font-medium uppercase tracking-widest text-pink-600">
                Exclusive Pre-Launch
              </span>
              <div className="h-3 w-px bg-pink-200"></div>
              <span className="text-base font-bold text-gray-900">April 2026</span>
            </div>

            {/* Cities Section */}
            <div className="mt-0">

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-700">
                {cities.map((city, index) => (
                  <span key={index} className="flex items-center text-base">
                    {city}
                    {index < cities.length - 1 && <span className="text-gray-300 mx-1 flex items-center">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Join the First Places to Serve ACID
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We&apos;re looking for <strong className="text-gray-900">daring venues</strong> ready
                    to bring ACID to their non-alcoholic offer.
                  </p>
                  <p className="text-2xl font-bold text-pink-600">
                    Got the guts?
                  </p>
                  <p>
                    Be among the first to serve ACID and share your feedback after
                    tasting the first drop.
                  </p>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
