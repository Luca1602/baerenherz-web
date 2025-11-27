import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Newsletter-Balken */}
      <div className="bg-accentGray py-8">
        <div className="container-footer flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              Newsletter abonnieren
            </h3>
            <p className="text-sm">
              Wir informieren Dich über unsere laufenden Projekte, wo Deine Spenden vor Ort Gutes tun und senden Dir Einladungen zu unseren Veranstaltungen.
              Kein Spam, versprochen!
            </p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="p-2 rounded-l-md border border-gray-300 flex-grow md:w-64"
            />
            <button
              type="submit"
              className="bg-accentBlue text-white px-4 py-2 rounded-r-md hover:bg-actionRed cursor-pointer"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-accentBlue text-white mt-0">
        <div className="container-footer py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Bärenherz Schweiz */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bärenherz Schweiz</h3>
            <ul className="space-y-2 text-sm">
              <li>Bärenherz - Verein für humanitäre Hilfe</li>
              <li>c/o Rainer Mück</li>
              <li>Untersellenstrasse 27</li>
              <li>CH-8873 Amden</li>
              <br />
              <li>E-Mail: <a href="mailto:info@baerenherz.org" className="link">info@baerenherz.org</a></li>
            </ul>
          </div>

          {/* Column 2: Bärenherz Deutschland */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bärenherz Deutschland</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/de/impressum" className="link">
                  Impressum
                </Link>
                 &nbsp; | &nbsp; 
                <Link href="/de/datenschutz" className="link">
                  Datenschutz
                </Link>
              </li>
              <li>Bärenherz – Verein für humanitäre Hilfe e.V.</li>
              <li>Geranienstrasse 2</li>
              <li>U82031 Grünwald</li>
              <br />
              <li>E-Mail: <a href="mailto:info@baerenherz.org" className="link">info@baerenherz.org</a></li>
            </ul>
          </div>

          {/* Column 3: Donation accounts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Spendenkonten</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Spendenkonto (Schweiz):</p>
                <p>Bärenherz – Verein für humanitäre Hilfe</p>
                <p>Thurgauer Kantonalbank</p>
                <p className="break-all">CH91 0078 4297 6098 0200 1 (CHF)</p>
                <p className="break-all">CH91 0078 4297 6098 0200 2 (EUR)</p>
                <p>BIC: KBTGCH22</p>
              </div>
              <div>
                <p className="font-semibold">Spendenkonto (Deutschland):</p>
                <p>Bärenherz – Verein für humanitäre Hilfe e.V.</p>
                <p>HypoVereinsbank / UniCredit</p>
                <p className="break-all">DE78 7002 0270 0046 6389 56</p>
                <p>BIC: HYVEDEMMXXX</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Mehr von Bärenherz</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
