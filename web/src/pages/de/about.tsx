import Image from 'next/image';

export default function AboutDE() {
  return (
    <div>
      <section className="container-hero relative">
        {/* background image of "about" */}
        <Image
          src="/hero/hero_about.jpg"
          alt="Bärenherz hero"
          fill
          priority
          className="object-cover"
        />

        {/* Box over image */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="bg-accentGray bg-opacity-90 p-6 shadow-lg max-w-lg ml-0 sm:ml-8 md:ml-16 lg:ml-40">
            <p className="text-brandGold text-3xl font-bold leading-snug">
              Direkte Hilfe, unbürokratisch <br></br> und schnell.
            </p>
          </div>
        </div>
      </section>

      <div className="container-body">
        <section id="about">
          <h1 className="text-3xl font-bold mb-6">Über Bärenherz Deutschland</h1>
          <section id="mission" className="py-8">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>
              Wir setzen uns für Menschen in akuter Not ein – dort, wo lebensnotwendige Unterstützung fehlt. 
              Als unabhängiger Verein realisieren wir gezielt ausgewählte Hilfsprojekte, finanziert durch Spenden, 
              Charity-Events und vor allem durch das persönliche Engagement unserer Mitglieder. Unser Handeln ist 
              geprägt von Verantwortung, Transparenz und dem Wunsch, aus Mitgefühl wirksame Hilfe zu gestalten.
            </p>
          </section>

          <section id="philosophie" className="py-8">
            <h2 className="text-2xl font-bold mb-4">Philosophie</h2>
            <p>
              Wir glauben daran, dass echte Hilfe dort beginnt, wo sie wirklich gebraucht wird.
              Unsere Arbeit richtet sich auf das Wesentliche: Leben retten, lebenswerte Bedingungen 
              schaffen und in unverschuldeten Notsituationen schnell und unbürokratisch zur Seite stehen. 
              Wir sind geleitet durch Mitgefühl, Menschlichkeit und der Mut, hinzuschauen und zu handeln.
            </p>

            <div className="mx-auto py-8">
              {/* The card ("Kasten") */}
              <div
                className="bg-accentBlue rounded-2xl shadow-xl p-6 md:p-10"
              >
                {/* Title inside the card */}
                <h2 className="text-3xl font-bold text-center mb-8">Die Philosophie unseres Vereins beruht auf drei Grundgedanken:</h2>

                {/* 3 responsive blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Hilfe zur Selbsthilfe</h3>
                    <p className="text-gray-700">
                      Bei Bärenherz steht die Hilfe  
                      zur Selbsthilfe im Mittelpunkt. Unser Ziel ist es nicht, nur kurzfristig 
                      zu unterstützen, sondern gemeinsam mit den Menschen Wege aus der Not zu gestalten.
                       Dort, wo wir helfen, wollen wir Strukturen stärken, Ressourcen aufbauen und die 
                       Grundlage für eine nachhaltige Verbesserung der Lebensumstände schaffen.
                    </p>
                  </div>

                  <div className="bg-accentGray rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Ehrenamtlich aus Überzeugung</h3>
                    <p className="text-gray-700">
                      Wir arbeiten ehrenamtlich und aus Überzeugung: Alles, was wir bewegen, 
                      machen wir mit viel Freude und Elan in unserer Freizeit, weil wir wissen, dass 
                      wir damit einen wertvollen Beitrag für Leben unter lebenswerten Bedingungen leisten können.
                    </p>
                  </div>

                  <div className="bg-accentGray rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Keine unnötigen Kosten</h3>
                    <p className="text-gray-700">
                      Wir vermeiden unnötige Kosten: Unsere administrativen Aufwendungen halten wir auf einem Minimum und 
                      finanzieren diese ausschliesslich  durch einen Teil unserer Mitgliedbeiträge. Alle Spenden sowie 
                      die Einnahmen aus unseren Aktivitäten  kommen zu 100% den Projekten zu Gute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="vorstand" className="py-8">
            <h2 className="text-2xl font-bold mb-4">Vorstand</h2>
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              
              {/* Text */}
              <div className="md:w-1/2">
                <p>
                  Aktuell setzt sich der Vorstand von Bärenherz Deutschland aus folgenden Personen zusammen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><b>Präsident Tom Luther</b>, Founder & Managing Partner 7Cap Investments GmbH</li>
                  <li><b>Vizepräsident Rainer Mück</b>, Gründer und Vorstand, Mück Management Partners AG</li>
                  <li><b>Schriftführerin Christiane Räbiger</b>, Gründerin und CEO, twinnovativ GmbH</li>
                  <li><b>Schatzmeister Oliver Brandt</b>, Geschäftsführer bei stahl + verbundbau gmbh</li>
                </ul>
              </div>

              {/* image not yet available
              <div className="md:w-1/2 mt-4 md:mt-0">
                <Image
                  src="/about/ch/vorstand_baerenherz_deutschland.webp"
                  alt="Bärenherz Vorstand"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto rounded-lg shadow"
                />
              </div>*/}

            </div>
          </section>

          <section id="statuten" className="py-8">
            <h2 className="text-2xl font-bold mb-6">Satzung</h2>
            <div className="prose max-w-none">
              <p><strong>des Vereins Bärenherz – Verein für humanitäre Hilfe e.V.</strong><br></br>
                gemäß Beschluss vom 2. April 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 1 (Name, Sitz)</h2>
                <ol>
                  <li>Der Verein führt den Namen „Bärenherz – Verein für humanitäre Hilfe e.V.“.</li>
                  <li>Er ist in das Vereinsregister eingetragen und führt daher den Zusatz „e.V.“.</li>
                  <li>Der Sitz des Vereins ist Grünwald.</li>
                </ol>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 2 (Zweck)</h2>
                <ol>
                  <li>Der Zweck des Vereins ist die Unterstützung von Menschen in Not sowie die Verbesserung der Lebensqualität von Bedürftigen. Es können einzelne Personen oder auch Institutionen vom Verein unterstützt werden.</li>
                  <li>Der Satzungszweck wird insbesondere verwirklicht durch Geldzuwendungen an bedürftige Einzelpersonen oder juristische Personen des öffentlichen Rechts oder steuerbegünstigte Körperschaften, die ihrerseits Bedürftige unterstützen, für deren mildtätige Zwecke. Die Bedürftigkeit bzw. der Verwendungszweck der Mittel bei Institutionen ist dem Vorstand gegenüber zu dokumentieren.</li>
                  <li>Der Verein kann sich auch an mildtätigen Aktionen und Projekten beteiligen oder solche unterstützen, die von anderen juristischen Personen des öffentlichen Rechts oder steuerbegünstigten Körperschaften mit ähnlicher Zielsetzung durchgeführt werden. Hierzu gehören beispielsweise Projekte des Vereins „Project HOPE e.V.“.</li>
                  <li>Der Verein verfolgt ausschließlich und unmittelbar mildtätige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung. Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins. Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind oder durch unverhältnismäßig hohe Vergütungen begünstigt werden. Der Vorstand des Vereins ist ehrenamtlich tätig.</li>
                </ol>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 3 (Mitgliedschaft)</h2>
                <ol>
                  <li>Mitglied des Vereins kann jede natürliche und juristische Person werden.</li>
                  <li>Über die Aufnahme entscheidet nach schriftlichem Antrag der Vorstand. Bei Minderjährigen ist der Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.</li>
                  <li>Der Austritt aus dem Verein ist jederzeit zulässig. Er muss schriftlich gegenüber dem Vorstand erklärt werden.</li>
                  <li>Ein Mitglied kann aus dem Verein ausgeschlossen werden, wenn sein Verhalten in grober Weise gegen die Interessen des Vereins verstößt. Über den Ausschluss entscheidet die Mitgliederversammlung.</li>
                  <li>Die Mitgliedschaft endet mit dem Tod des Mitglieds, bei juristischen Personen mit deren Erlöschen.</li>
                  <li>Das ausgetretene oder ausgeschlossene Mitglied hat keinen Anspruch gegenüber dem Vereinsvermögen.</li>
                  <li>Die Mitglieder haben Mitgliedsbeiträge zu leisten. Die Höhe und Fälligkeit der Mitgliedsbeiträge wird durch die Mitgliederversammlung festgesetzt.</li>
                </ol>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 4 (Vorstand)</h2>
                <ol>
                  <li>Der Gesamtvorstand des Vereins besteht aus dem 1. Vorsitzenden, dem 2. Vorsitzenden, dem Kassier und dem Schriftführer.</li>
                  <li>Der Vorstand im Sinne des § 26 BGB besteht aus dem 1. Vorsitzenden und dem 2. Vorsitzenden. Jeder von ihnen vertritt den Verein einzeln.</li>
                  <li>Der Vorstand wird von der Mitgliederversammlung auf die Dauer von drei Jahren gewählt; er bleibt jedoch so lange im Amt, bis eine Neuwahl erfolgt ist.</li>
                </ol>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 5 (Mitgliederversammlung)</h2>
                <ol>
                  <li>Die ordentliche Mitgliederversammlung findet einmal jährlich statt. Außerdem muss eine Mitgliederversammlung einberufen werden, wenn das Interesse des Vereins es erfordert oder wenn mindestens 1/10 der Mitglieder die Einberufung schriftlich unter Angabe des Zwecks und der Gründe verlangt.</li>
                  <li>Jede Mitgliederversammlung ist vom Vorstand schriftlich unter Einhaltung einer Einladungsfrist von 4 Wochen und unter Angabe der Tagesordnung einzuberufen.</li>
                  <li>Versammlungsleiter ist der 1. Vorsitzende und im Falle seiner Verhinderung der 2. Vorsitzende. Sollten beide nicht anwesend sein, wird ein Versammlungsleiter von der Mitgliederversammlung gewählt. Soweit der Schriftführer nicht anwesend ist, wird auch dieser von der Mitgliederversammlung bestimmt.</li>
                  <li>Jede ordnungsgemäß einberufene Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.</li>
                  <li>Die Beschlüsse der Mitgliederversammlung werden mit einfacher Mehrheit der abgegebenen gültigen Stimmen gefasst. Zur Änderung der Satzung und des Vereinszwecks ist jedoch eine Mehrheit von ¾ der abgegebenen gültigen Stimmen erforderlich.</li>
                  <li>Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll aufzunehmen, das vom Versammlungsleiter und dem Schriftführer zu unterschreiben ist.</li>
                </ol>

                <h2 className="text-xl font-semibold mt-6 mb-2">§ 6 (Auflösung, Anfall des Vereinsvermögens)</h2>
                <ol>
                  <li>Zur Auflösung des Vereins ist eine Mehrheit von 4/5 der abgegebenen gültigen Stimmen erforderlich.</li>
                  <li>Bei Auflösung des Vereins, Entzug der Rechtsfähigkeit oder bei Wegfall seiner steuerbegünstigten Zwecke fällt das Vermögen des Vereins an Project HOPE e.V., der es unmittelbar und ausschließlich für steuerbegünstigte Zwecke zu verwenden hat.</li>
                </ol>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}
