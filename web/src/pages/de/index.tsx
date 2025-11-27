import Image from 'next/image';

export default function DEHome() {
  return (
    <>
      <section className="container-hero relative">
        <Image
          src="/projekte/projekte-image.webp"
          alt="Bärenherz hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="bg-white bg-opacity-90 p-6 shadow-lg max-w-lg ml-0 sm:ml-8 md:ml-16 lg:ml-40">
            <p className="text-brandGold text-3xl font-bold leading-snug">
              Helfen, wo Hilfe lebensnotwendig ist.
            </p>
          </div>
        </div>
      </section>

      <main className="container-body py-10">
        <p className="text-xl leading-relaxed">
          Bärenherz - Verein für humanitäre Hilfe - wurde 2021 in der Schweiz durch
          Rainer Mück gegründet. Im April 2025 haben wir auch einen deutschen Verein
          gegründet – Bärenherz – Verein für humanitäre Hilfe e.V.. Beide Vereine mit
          dem gleichen Ziel, dort zu helfen, wo lebensnotwendige Unterstützung
          dringend benötigt wird.
        </p>

        <br />

        <p className="text-xl leading-relaxed py-4">
          Wir sind ein unabhängiger Verein, der durch das persönliche und
          ehrenamtliche Engagement der Mitglieder getragen wird und jeweils im Vorfeld
          definierte Projekte im Sinne der Philosophie des Vereins unterstützt.
        </p>

        <video
          src="/video/Baerenherz_Video.mp4"
          controls
          className="h-96 w-full max-w-4xl mx-auto rounded shadow object-contain bg-gray-100"
          poster="/logo/logo_baerenherz.png"
        ></video>
      </main>
    </>
  );
}
