import Image from 'next/image';

export default function MitgliedschaftDE() {
  return (
    <div>
      <section className="container-hero relative">
          {/* background image of "mitgliedschaft" */}
          <Image
            src="/mitgliedschaft/mitgliedschaft-image.webp"
            alt="Bärenherz hero"
            fill
            priority
            className="object-cover"
          />
  
          {/* Box over image */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="bg-accentGray bg-opacity-90 p-6 shadow-lg max-w-lg ml-0 sm:ml-8 md:ml-16 lg:ml-40">
              <h2 className="text-lg font-semibold mb-2">Mitgliedschaft bei Bärenherz Deutschland</h2>
              <hr
                className="border-t-2 my-2 w-full border-brandGold"
              />
              <p className="text-brandGold text-3xl font-bold leading-snug">
                Gemeinsam dort helfen, wo Hilfe gebraucht wird.
              </p>
            </div>
          </div>
      </section>

      <section className="container-body">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Mitgliedschaft Bärenherz Deutschland</h2>

        <p className="text-gray-800 leading-relaxed">
          Eine Mitgliedschaft bei Bärenherz Deutschland hilft uns, unsere administrativen Kosten und Aufgaben zu erfüllen.
          Ein wesentlicher Teil unserer Philosophie ist es, dass alle Einnahmen aus unseren Aktivitäten zu 100% 
          in die jeweils geförderten Projekte fliessen. Sämtliche administrativen Kosten wie z.B. Pflege der Homepage 
          werden ehrenamtlich übernommen bzw. von Mitgliedsbeiträgen oder Zuwendungen der Mitglieder getragen.
          Auch freuen wir uns natürlich, uns mit unseren Mitgliedern auszutauschen, Ideen aufzunehmen und uns 
          gemeinsam zu engagieren. Wir bieten sowohl eine persönliche Mitgliedschaft wie auch eine Unternehmensmitgliedschaft 
          für alle an, die die Philosophie und Projekte unseres karitativen Vereins unterstützen wollen.
          Nachfolgend können Sie die Mitgliedschaft einfach online beantragen, der Vorstand entscheidet dann umgehend über die Aufnahme.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persönliche Mitgliedschaft */}
          <div className="bg-accentGray p-6 text-center rounded shadow">
            <h3 className="text-blue-900 font-semibold mb-2">Persönliche Mitgliedschaft Deutschland</h3>
            <p className="mb-4">Jahresbeitrag EUR 250.00</p>
            <a
              href="/mitgliedschaft/de/Baerenherz_Antrag_Mitgliedschaft_DE.pdf"
              download
              className="bg-accentBlue text-white px-6 py-2 font-semibold hover:bg-actionRed inline-block"
            >
              Persönliches Mitglied werden
            </a>
          </div>

          {/* Unternehmensmitgliedschaft */}
          <div className="bg-accentGray p-6 text-center rounded shadow">
            <h3 className="text-blue-900 font-semibold mb-2">Unternehmensmitgliedschaft Deutschland</h3>
            <p className="mb-4">Jahresbeitrag EUR 1&apos;000.00</p>
            <a
              href="/mitgliedschaft/de/Baerenherz_Antrag_Mitgliedschaft_DE.pdf"
              download
              className="bg-accentBlue text-white px-6 py-2 font-semibold hover:bg-actionRed inline-block"
            >
              Unternehmensmitglied werden
            </a>
          </div>
        </div>

        <p className="mt-8 text-gray-800 leading-relaxed">
          Der Jahresbeitrag ist jeweils für das Kalenderjahr geschuldet. Bitte füllen Sie das verknüpfte Antragsformular aus 
          und reichen Sie dieses ein an <a href="mailto:info@baerenherz.org" className="link">info@baerenherz.org</a> 
          &nbsp; oder per Post an Bärenherz – Verein für humanitäre Hilfe, c/o Rainer Mück, Untersellenstrasse 37, 8873 Amden.
          Der Vorstand entscheidet über die Aufnahme neuer Vereinsmitglieder.
        </p>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Eventpartner</h2>

          <p className="text-gray-800 leading-relaxed">
            Als Eventpartner helfen Sie uns, die jeweiligen Events so kostengünstig wie möglich durchzuführen.
            Bei allen Events arbeiten wir kostendeckend durch die jeweilige Teilnahmegebühr. Sämtliche Überschüsse
            der Events fliessen vollständig in die jeweils unterstützten Projekte. Als Eventpartner helfen Sie uns,
            die Unterstützung der Projekte zu erhöhen und haben die Möglichkeit, sich und Ihr Unternehmen in unserem
            Teilnehmerkreis und in den Ankündigungen/Programmen zu präsentieren. Wir bieten Ihnen folgende Möglichkeiten an:
          </p>

          {/* Platin */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">Platin Partner:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Nennung des Partners in der gesamten Kommunikation und auf dem Event</li>
              <li>Verteilung von Unternehmensbroschüren und Werbemittel am Event</li>
              <li>2 Teilnehmer am Event</li>
              <li>Exklusiver Namenssponsor des Events</li>
            </ul>
          </div>

          {/* Gold */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">Gold Partner:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Nennung des Partners in der gesamten Kommunikation und auf dem Event</li>
              <li>Verteilung von Unternehmensbroschüren und Werbemittel am Event</li>
              <li>1 Teilnehmer am Event</li>
            </ul>
          </div>

          {/* Business */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">Business Partner:</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Nennung des Partners in der gesamten Kommunikation und auf dem Event</li>
              <li>Verteilung von Unternehmensbroschüren und Werbemittel am Event</li>
            </ul>
          </div>

          <p className="mt-8 text-gray-800">
            Bitte sprechen Sie uns an, wenn Sie uns an einem unserer Events unterstützen wollen.
          </p>
        </div>
      </section>
    </div>
  )
}