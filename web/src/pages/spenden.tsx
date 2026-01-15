import Head from 'next/head'

export default function Spenden() {
  return (
    <>
      <Head>
        <title>Jetzt spenden – Bärenherz</title>
      </Head>

      <main className="container-body py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Jetzt spenden</h1>
        <p className="text-lg mx-auto">
          Mit Ihrer Spende unterstützen Sie unsere Projekte und helfen uns, Menschen in Not
          direkt und unbürokratisch zu unterstützen.
        </p>
          
        <p className="text-lg mx-auto mb-10"> 
          Jeder Beitrag zählt – vielen Dank für Ihre Hilfe!
        </p>

        {/* Spendenmöglichkeiten */}
        <div className="grid md:grid-cols-2 gap-8  mx-auto">
          
          {/* Bankverbindung CH */}
          <div className="bg-accentGray p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Banküberweisung Schweiz</h2>
            <p><strong>Bärenherz – Verein für humanitäre Hilfe</strong></p>
            <p>Thurgauer Kantonalbank</p>
            <p>CH91 0078 4297 6098 0200 1 (CHF)</p>
            <p>CH91 0078 4297 6098 0200 2 (EUR)</p>
            <p>BIC: KBTGCH22</p>
          </div>

          {/* Bankverbindung DE*/}
          <div className="bg-accentGray p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Banküberweisung Deutschland</h2>
            <p><strong>Bärenherz – Verein für humanitäre Hilfe e.V.</strong></p>
            <p>HypoVereinsbank / UniCredit</p>
            <p>DE78 7002 0270 0046 6389 56</p>
            <p>BIC: HYVEDEMMXXX</p>
          </div>
        </div>
      </main>
    </>
  )
}
