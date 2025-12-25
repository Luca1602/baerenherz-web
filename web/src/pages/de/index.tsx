import Image from 'next/image';

export default function DEHome() {
  return (
    <>
      <section className="container-hero relative">
        <Image
          src="/hero/hero_homepage2.jpg"
          alt="Bärenherz hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="bg-white bg-opacity-90 p-6 shadow-lg max-w-lg ml-0 sm:ml-8 md:ml-16 lg:ml-40">
            <p className="text-brandGold text-3xl font-bold leading-snug">
              Bärenherz hilft dort, wo Hilfe lebensnotwendig ist
            </p>
          </div>
        </div>
      </section>

      <main className="container-body">
        <p className="text-xl leading-relaxed">
          <b>Wir helfen da, wo Hilfe wirklich gebraucht wird.</b><br/>
          Wenn das Leben ins Wanken gerät, zählt vor allem eines: Mitgefühl, das Menschen ins Handeln bringt. Bärenherz steht für direkte, unbürokratische Hilfe in akuten Notsituationen – getragen von Ehrenamt, Herzenswärme und dem tiefen Wunsch, Hoffnung zu schenken.
        </p>

        <br />

        <p className="text-xl leading-relaxed py-4">
          <b>Bärenherz ist ein unabhängiger Verein für humanitäre Hilfe.</b><br/>
          Wir sind dort zur Stelle, wo Menschen unverschuldet in Not geraten – mit offenen Händen, offenen Herzen und echter Menschlichkeit. Unsere Projekte entstehen aus dem Wunsch heraus, Leben zu stärken und Perspektiven zu ermöglichen. Gemeinsam mit unseren Unterstützern schaffen wir Voraussetzungen, in denen Hilfe ankommt und Zukunft für notleidende Menschen wieder möglich wird.
        </p>

        <br />

        <p className="text-xl leading-relaxed py-4">
          Bärenherz wurde 2021 in der Schweiz von Rainer Mück ins Leben gerufen – aus dem tiefen Wunsch heraus, dort zu helfen, wo Menschlichkeit zählt.
          Seit April 2025 tragen wir dieses Herz auch in Deutschland weiter: mit dem Bärenherz – Verein für humanitäre Hilfe e. V.
        </p>

        <br />

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
