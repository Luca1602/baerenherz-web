import Head from 'next/head'

export default function confirmation2() {
  return (
    <>
      <Head>
        <title>Newletter-Anmeldung erfolreich! – Bärenherz</title>
      </Head>

      <main className="container-body py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Newletter-Anmeldung erfolreich!</h1>
        <p>
          Deine Anmeldung für unseren Newsletter war erfolgreich!

          Vielen Dank!
        </p>
        
      </main>
    </>
  )
}
