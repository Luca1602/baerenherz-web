import Image from 'next/image';

export default function Projekte() {
  return (
    <div>

      <section className="container-hero relative">
        {/* background image of "projekte" */}
        <Image
          src="/hero/hero_hilfsprojekte.webp"
          alt="Bärenherz hero"
          fill
          priority
          className="object-cover"
        />

        {/* Box over image */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="bg-white bg-opacity-90 p-6 shadow-lg max-w-lg ml-0 sm:ml-8 md:ml-16 lg:ml-40">
            <p className="text-brandGold text-3xl font-bold leading-snug">
              Hilfe für die Schwächsten. <br></br>Direkt und lebensrettend.
            </p>
          </div>
        </div>
      </section>

      <div className="container-body">

        <section id="projekte2025" className="mb-12 py-6">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Projekte 2025</h2>

          <p className="text-gray-800 leading-relaxed">
            Durch die sehr gute Zusammenarbeit mit Project Hope vor Ort und dem aktuellen Gesundheitsminister haben wir uns entschieden, auch 2025 die gesundheitliche Versorgung von Mutter und Kind in Nordmazedonien weiter zu verbessern. Die herausfordernde Situation in Nordmazedonien (ca. 50% der Bevölkerung lebt in und um Skopje) führt dazu, dass die medizintechnische Ausstattung in den kleineren Krankenhäusern im Land nach wie vor sehr schlecht ist und viele Bürger versuchen, nach Skopje zu kommen, was die Situation weiter verschlechtert. Wir werden allerdings auch zukünftig nur dort unterstützen, wo auch die zuständigen Behörden ihren Beitrag leisten. Das ist beispielsweise in Strumica immer noch nicht passiert.

            Aktuell liegen Project Hope 4 Anträge zur Unterstützung verschiedener Einrichtungen vor, die in den nächsten Wochen evaluiert werden. Anfang 2025 werden auch wir uns ein Bild vor Ort machen und dann konkret entscheiden, welches Projekt von Bärenherz unterstützt wird. Bisher ist es Projekt Hope – auch mit der Unterstützung von Bärenherz – gelungen, in den beteiligten Kliniken in Nordmazedonien die Sterblichkeit von Frühchen um 2/3 zu senken. Das ist auch für uns weiterhin Motivation, uns hier zu engagieren.
          </p>
        </section>

        <section id="projekte2024" className="mb-12 py-6">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Projekte 2024</h2>

          <p className="text-gray-800 leading-relaxed">
            Nachdem wir für 2024 eigentlich entschieden hatten, das Projekt in Strumica zu unterstützen, um die notwendigste medizinische Versorgung in der Geburtenstation sicherzustellen, mussten wir feststellen, dass man es dort immer noch nicht geschafft hat, in das neue Krankenhaus umzuziehen. Vor diesem Hintergrund haben wir uns dem Krankenhaus in Bitola zugewendet, das wir schon bei einem früheren Besuch besichtigt hatten. Mit der Unterstützung von Project HOPE haben wir medizinische Geräte im Wert von 85'000 Euro übergeben, die auch schon im Einsatz sind, um Neugeborenen und Ihren Müttern einen besseren Start ins Leben zu ermöglichen. Trotz aller Widrigkeiten, die es immer wieder gibt, ist es am Ende ein gutes Gefühl zu sehen, das unsere Hilfe ankommt. Beeindruckend auch der Einsatz und die Dankbarkeit der Verantwortlichen im Krankenhaus. Davon konnten wir uns beim Besuch vor Ort im April persönlich ein Bild machen.
          </p>

        </section>

        <section id="projekte2023" className="mb-12 py-6">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Projekte 2023</h2>

          <p className="text-gray-800 leading-relaxed">
            Für 2023 haben wir uns entschieden, weiterhin Project HOPE e.V. mit dem Engament in Nordmazedonien zu unterstützen. Bei unserem Besuch im Frühjahr 2023 mussten wir uns von den verheerenden Zuständen in Strumica überzeugen. Hier fehlt es an der nötigsten medizinischen Ausstattung insbesondere in der Geburtenstation. Daher gingen auch die Geburten dort in den letzten Jahren kontinuierlich zurück. Die Tatsache, dass ein neues Krankenhaus fertiggestellt ist, hilft leider nicht vollkommen, da inzwischen das Geld ausgegangen ist und man es trotz Fertigstellung noch nicht geschafft hat, in dieses Krankenhaus überzusiedeln. Für die medizinische Ausstattung fehlen sämtliche Mittel. Die Situation zeigt aber auch, wie wichtig es ist, wirklich vor Ort sicherzustellen, dass die Mittel zielgerichtet verwendet werden und das auch nachhaltig so bleibt. Dafür werden wir persönlich alles tun.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/projekte/projekte2023-1.webp",
              "/projekte/projekte2023-2.webp",
              "/projekte/projekte2023-3.webp",
              "/projekte/projekte2023-4.webp"
            ].map((src, index) => (
              <div key={index} className="w-full aspect-[4/3] overflow-hidden rounded">
                <img
                  src={src}
                  alt={`Projektbild ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
        </section>

        <section id="projekte2022" className="mb-12 py-6">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Projekte 2022</h2>

          <p className="text-gray-800 leading-relaxed">
            Für 2022 haben wir uns entschieden, dass Projekt PeriMAC zu unterstützen. Hier geht es um eine Verbesserung der Gesundheitsvorsorge „rund um die Geburt“ in Nordmazedonien. Aus unserer persönlichen Erfahrungmy-8 bestehende Strukturen zugreifen, die sich über die Zeit bewährt haben und einen wirklich unglaublichen Beitrag zur Verbesserung des Gesundheitswesens in den ärmsten Ländern Europas geleistet haben. Project HOPE e.V.setzt sich seit 25 Jahren erfolgreich dafür ein, dass in Osteuropa mehr Neugeborene überleben. Dies geschieht mit Bereitstellung moderner Medizintechnik und durch kompetente Fortbildung von Ärzten und Pflegepersonal. Im aktuellen Projekt PeriMAC stehen 2 wesentliche Themen an, die Bärenherz in 2022 mit Ihrer Hilfe begleiten und unterstützen möchte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      
            {/* card 1 */}
            <div className="bg-accentBlue p-6 text-center text-white">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Medizintechnik</h3>
              <p className="text-sm">
                Auch im Jahr 2022 wird Project HOPE e.V. sein Engagement für das Land Nordmazedonien fortsetzen.
                Mit dem klaren Ziel, dort weiterhin die Säuglingssterblichkeit zu reduzieren, werden in Absprache
                mit dem Gesundheitsministerium des Landes weitere regionale Kliniken mit lebensrettenden Gerätschaften
                ausgestattet. Mit einem Betrag von CHF 25.000 können folgende lebensrettende Geräte für die Geburtsabteilungen
                der Kliniken in Štip und Bitola angeschafft werden: Inkubatoren, Beatmungsgeräte, Wärmbettchen. 
                Als Referenz:  
                • Inkubator: € 10.000  
                • Wärmbettchen: € 2.500  
                • Beatmungsgerät: € 10.000
              </p>
            </div>

            {/* card 2 */}
            <div className="bg-accentBlue p-6 text-center text-white">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Fortbildung</h3>
              <p className="text-sm">
                Weil insbesondere die ersten kritischen 10 Minuten im Leben eines Neugeborenen gut bewältigt werden müssen,
                wird ein umfangreiches Ausbildungsprogramm mit dem Schwerpunkt auf diese neonatale Erstversorgung durchgeführt
                [NLS = Newborn Life Support]. Project HOPE vertraut auf die ehrenamtliche Unterstützung der Universitätskliniken
                Amsterdam und Bonn. Für die Trainingsmodelle (z.B. „Premature Anne“ von Laerdal, s. Foto), für Schulungsmaterialien,
                Urkunden, Akkreditierung sowie Übersetzungen, benötigt Project HOPE einen Betrag in Höhe von CHF 25.000.
                Mehr als 150 Ärzte und Pflegepersonal werden von dieser nachhaltigen Initiative profitieren.
                Sie schenken somit nicht nur vielen Neugeborenen einen sicheren Start ins Leben, sondern leisten einen
                unermesslichen Beitrag zur Motivation / zum Engagement des medizinischen Personals.
              </p>
            </div>
          </div>

          <p>
            Wir werden uns im Verlauf des Jahres 2022 persönlich vor Ort von der aktuellen Situation überzeugen und hoffen, hier einen wertvollen Beitrag leisten zu können. Für weitere Informationen über das Projekt und die Arbeit von Project Hope e.V. stehen Ihnen die Informationen auf der Homepage zur Verfügung:
              <a href="www.projecthope.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              www.projecthope.de
            </a> 
          </p>

        </section>
      </div>
    </div>
  )
}
