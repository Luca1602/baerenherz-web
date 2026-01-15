import Head from 'next/head'

export default function confirmation1() {
  return (
    <>
      <Head>
        <title>Bitte bestätige deine E-Mail-Adresse – Bärenherz</title>
      </Head>

      <main className="container-body py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Bitte bestätige deine E-Mail-Adresse</h1>
        <p>
          Du hast eine Bestätigungs-E-Mail erhalten. Bitte bestätige diese, damit Deine Anmeldung registriert werden kann.

          Vielen Dank!
        </p>
        
      </main>
    </>
  )
}
