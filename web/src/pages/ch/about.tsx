import Image from 'next/image';

export default function AboutCH() {
  return (
    <div>
      <section className="container-hero relative">
        {/* background image of "about" */}
        <Image
          src="/hero/hero_about.webp"
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
          <h1 className="text-3xl font-bold mb-6">Über Bärenherz Schweiz</h1>
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
                className="rounded-2xl shadow-xl p-6 md:p-10 bg-accentBlue"
              >
                {/* Title inside the card */}
                <h2 className="text-3xl font-bold text-center mb-8">Die Philosophie unseres Vereins beruht auf drei Grundgedanken:</h2>

                {/* 3 responsive blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-accentGray rounded-lg shadow-md p-6">
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
                    <h3 className="text-xl font-semibold mb-3">Keine unnötige Kosten</h3>
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
                  Aktuell setzt sich der Vorstand von Bärenherz Schweiz aus folgenden Personen zusammen:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><b>Präsident Rainer Mück</b>, Gründer und Vorstand, Mück Management Partners AG</li>
                  <li><b>Vizepräsident Andreas Wenzel</b>, Inhaber und Geschäftsführer, IZMI It’s me – Mehr Freude durch Bewusstsein, sowie General Project Manager, Personal Sport Record</li>
                  <li><b>Vorstandsmitglied Dr. Andrea Degen</b>, Co-Founder und CEO, Institute for Mental Health, sowie Research & Innovation Manager EUrelations AG</li>
                  <li><b>Vorstandsmitglied Markus T. Schweizer</b>, Senior Partner, EY</li>
                  <li><b>Vorstandsmitglied Tom Luther</b>, Managing Partner 7Cap Investments</li>
                </ul>
              </div>

              {/* Bild */}
              <div className="md:w-1/2 mt-4 md:mt-0">
                <Image
                  src="/about/ch/vorstand_baerenherz_schweiz.webp"
                  alt="Bärenherz Vorstand"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto rounded-lg shadow"
                />
              </div>

            </div>
          </section>

          <section id="statuten" className="py-8">
            <h2 className="text-2xl font-bold mb-6">Statuten</h2>
            <div className="prose max-w-none">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Namen und Sitz</strong><br />
                  Unter dem Namen «Bärenherz – Verein für humanitäre Hilfe» besteht ein Verein für humanitäre Hilfe im Sinne von Art. 60 ff. ZGB mit Sitz in Amden SG. Er ist politisch und konfessionell unabhängig.
                </li>

                <li>
                  <strong>Zweck</strong><br />
                  Der Verein bezweckt die Unterstützung von Menschen in Not sowie die Verbesserung der Lebensqualität von Bedürftigen.<br /><br />
                  Es können einzelne Personen oder auch Institutionen vom Verein unterstützt werden.<br /><br />
                  <em>Dedizierte Projekte:</em> Nebst dem allgemeinen Vereinszweck gibt es noch dedizierte Projekte, welche mit zweckgebundenen Mitteln finanziert werden. Dazu gehörten unter anderem Projekte des Vereins „Project Hope Germany e.V.“<br /><br />
                  Der Verein verfolgt weder Erwerbs- noch Selbsthilfezwecke. Der Verein kann sich auch an Aktionen und Projekten beteiligen oder solche unterstützen, die durch andere Organisationen mit ähnlicher Zielsetzung durchgeführt werden.<br /><br />
                  Der Verein verfolgt keine kommerziellen Zwecke und erstrebt keinen Gewinn. Die Organe sind ehrenamtlich tätig.
                </li>

                <li>
                  <strong>Mittel</strong><br />
                  <em>Mittelzusicherung:</em> Während der Aufbauphase bis Ende 2021 sichert Rainer Mück dem Verein zu, dass die in 2021 dem Verein zufliessenden Mitteln mindestens CHF 1‘000.- betragen. Das Vereinsvermögen ist nach den Grundsätzen einer sicheren Anlage zu verwalten. Aus dem Vereinsvermögen und dessen Erträgnissen dürfen keine Leistungen erbracht werden, die nicht dem Vereinszweck entsprechen. Ein Rückfall des Vereinsvermögens an die Mitglieder oder an aussenstehende Spender ist ausgeschlossen.<br /><br />
                  Weitere Mitteleinkünfte werden aus Spenden und Zuwendungen aller Art von Dritten oder Mitgliedern generiert.<br /><br />
                  Das Geschäftsjahr entspricht dem Kalenderjahr.
                </li>

                <li>
                  <strong>Mitgliedschaft</strong><br />
                  Mitglieder können natürliche und juristische Personen werden, die den Vereinszweck unterstützen. Alle Mitglieder haben in der Mitgliederversammlung das gleiche Stimmrecht.<br />
                  Aufnahmegesuche sind an den Vorstand zu richten; über die Aufnahme entscheidet der Vorstand.
                </li>

                <li>
                  <strong>Erlöschen der Mitgliedschaft</strong><br />
                  Die Mitgliedschaft erlischt:
                  <ul className="list-disc pl-6">
                    <li>bei natürlichen Personen durch Austritt, Ausschluss oder Tod</li>
                    <li>bei juristischen Personen durch Austritt, Ausschluss oder Auflösung der juristischen Person</li>
                  </ul>
                </li>

                <li>
                  <strong>Austritt und Ausschluss</strong><br />
                  Ein Vereinsaustritt ist jederzeit möglich. Das Austrittsschreiben muss mindestens vier Wochen vor der ordentlichen Mitgliederversammlung schriftlich an den Vorstand gerichtet werden.<br /><br />
                  Ein Mitglied kann jederzeit ohne Angaben von Gründen vom Vorstand ausgeschlossen werden.<br /><br />
                  Der Vorstand fällt den Ausschlussentscheid; das Mitglied kann den Ausschlussentscheid an die Mitgliederversammlung weiterziehen.
                </li>

                <li>
                  <strong>Organe des Vereins</strong><br />
                  Die Organe des Vereins sind:
                  <ul className="list-disc pl-6">
                    <li>die Mitgliederversammlung</li>
                    <li>der Vorstand</li>
                  </ul>
                </li>

                <li>
                  <strong>Die Mitgliederversammlung</strong><br />
                  Das oberste Organ des Vereins ist die Mitgliederversammlung. Eine ordentliche Mitgliederversammlung findet jährlich in der ersten Jahreshälfte statt.<br /><br />
                  Zur Mitgliederversammlung werden die Mitglieder zehn Tage im Voraus schriftlich unter Angabe der Traktanden eingeladen. Einladungen per E-Mail sind gültig.<br /><br />
                  Traktandierungsanträge zuhanden der Mitgliederversammlung sind bis spätestens vier Wochen schriftlich an den Vorstand zu richten.<br /><br />
                  Der Vorstand oder 1/5 der Mitglieder können jederzeit die Einberufung einer ausserordentlichen Mitgliederversammlung unter Angaben des Zwecks verlangen. Die Versammlung hat spätestens acht Wochen nach Eingang des Begehrens zu erfolgen.<br /><br />
                  Die Mitgliederversammlung hat folgende unentziehbare Aufgaben und Kompetenzen:
                  <ul className="list-disc pl-6">
                    <li>Genehmigung des Protokolls der letzten Mitgliederversammlung</li>
                    <li>Genehmigung des Jahresberichts des Vorstands</li>
                    <li>Genehmigung der Jahresrechnung</li>
                    <li>Entlastung des Vorstandes</li>
                    <li>Wahl des Präsidenten/der Präsidentin und des übrigen Vorstandes</li>
                    <li>Kennisnahme des Jahresbudgets</li>
                    <li>Kennisnahme des Tätigkeitsprogrammes</li>
                    <li>Beschlussfassung über weitere Geschäfte</li>
                    <li>Änderung der Statuten</li>
                    <li>Entscheid über Ausschlüsse von Mitgliedern</li>
                    <li>Auflösung des Vereins und Verwendung des Liquidationserlöses</li>
                  </ul>
                  Jede ordnungsgemäss einberufene Mitgliederversammlung ist unabhängig von der Anzahl Mitglieder beschlussfähig.<br />
                  Die Mitglieder fassen die Beschlüsse mit dem einfachen Mehr. Bei Stimmengleichheit fällt die/der Vorsitzende den Stichentscheid.<br /><br />
                  Statutenänderungen benötigen die Zustimmung einer 2/3-Mehrheit der Stimmberechtigten.<br /><br />
                  Über die gefassten Beschlüsse ist zumindest ein Beschlussprotokoll abzufassen.
                </li>

                <li>
                  <strong>Der Vorstand</strong><br />
                  Der Vorstand besteht aus mindestens zwei Personen, einem Präsidenten und einem weiteren Mitglied.<br /><br />
                  Die Amtszeit beträgt fünf Jahre. Wiederwahl ist möglich.<br /><br />
                  Der Vorstand führt die laufenden Geschäfte und vertritt den Verein nach aussen.<br />
                  Er erlässt Reglemente und kann Arbeitsgruppen einsetzen.<br /><br />
                  Weitere Aufgaben und Kompetenzen:
                  <ul className="list-disc pl-6">
                    <li>Erstellung des Jahresbudgets</li>
                    <li>Sicherstellung der Spendenzuflüsse</li>
                    <li>Vergabe der Mittel über CHF 1‘000.00</li>
                    <li>Mindestens jährliche Sitzungen mit Protokoll</li>
                  </ul>
                  Der Vorstand ist ehrenamtlich tätig, erhält aber Spesenvergütung.
                </li>

                <li>
                  <strong>Zeichnungsberechtigung</strong><br />
                  Der Vorstand legt die Zeichnungsberechtigung der Vorstandsmitglieder fest.
                </li>

                <li>
                  <strong>Haftung</strong><br />
                  Für die Schulden des Vereins haftet nur das Vereinsvermögen. Eine persönliche Haftung der Mitglieder ist ausgeschlossen.
                </li>

                <li>
                  <strong>Auflösung des Vereins</strong><br />
                  Die Auflösung des Vereins kann mit 2/3-Mehrheit beschlossen werden. Das Vereinsvermögen ist im Sinne des Vereinszwecks zu verwenden. Ein Aktivenüberschuss fällt an eine steuerbefreite Organisation in der Schweiz mit gleichem oder ähnlichem Zweck.
                </li>

                <li>
                  <strong>Inkrafttreten</strong><br />
                  Diese Statuten wurden an der Gründungsversammlung vom 02.07.2021 angenommen und sind mit diesem Datum in Kraft getreten.
                </li>
              </ol>
            </div>
          </section>


        </section>
      </div>
    </div>
  )
}
