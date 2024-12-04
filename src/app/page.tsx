import Link from "next/link";

import { Header } from "~/app/components/header";
import { EventCard } from "~/app/components/event-card";
import { Footer } from "~/app/components/footer";

const events = [
  {
    name: "BitDevs GDL",
    description: "BitDevs en Guadalajara",
    url: "https://bitdevs.btcgdl.com",
    meetupUrl: "https://www.meetup.com/guadalajara-bitcoin-and-lightning/",
    xUrl: "https://x.com/btc_ln_gdl",
    imageUrl: "/images/gdl.webp.avif",
    cityName: "Guadalajara",
  },
  {
    name: "BitDevs CDMX",
    description: "BitDevs en la Ciudad de México",
    url: "https://cdmx.bitdevs.mx",
    meetupUrl: "https://www.meetup.com/bitdevs-cdmx/", // Replace with actual Meetup URL when available
    xUrl: "https://x.com/BitDevsCDMX",
    imageUrl: "/images/cdmx.webp",
    cityName: "Ciudad de México",
  },
  // Add more events as they become available
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-br from-[oklch(0.95_0.08_40)] via-[oklch(0.92_0.10_45)] to-[oklch(0.89_0.12_50)]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-[oklch(0.25_0.12_30)]">
              Bienvenido a BitDevs México
            </h1>
            <p className="text-xl text-[oklch(0.30_0.10_35)]">
              Descubre seminarios socráticos sobre Bitcoin en México
            </p>
          </div>
        </section>
        <section id="acerca-de" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              ¿Qué es un seminario BitDevs?
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              BitDevs es una comunidad decentralizada para aquellos interesados
              en discutir y participar en la investigación y desarrollo de
              Bitcion y protocolos relacionados. Estas comunidades usualmente
              siguen el formato de{" "}
              <Link
                href="https://es.wikipedia.org/wiki/Método_socrático"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noopener"
              >
                seminarios socráticos
              </Link>{" "}
              para fomentar el debate y compartir información.
            </p>
          </div>
        </section>
        <section id="eventos" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center gray-900">
              Seminarios BitDevs en México
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
