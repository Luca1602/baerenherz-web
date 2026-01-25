// pages/aktivitaeten/index.tsx
import Link from "next/link"
import Image from "next/image"
import { client, urlFor } from "../../../lib/sanity"
import { formatAktivitaetDatum } from "../../../lib/formatAktivitaetDatum" // Pfad ggf. anpassen


type AktivitaetListItem = {
  _id: string
  title: string
  startDate: string
  endDate?: string | null
  image?: any
  country: string
  slug: { current: string }
}

export default function AktivitaetenIndex({
  aktivitaeten,
}: {
  aktivitaeten: AktivitaetListItem[]
}) {
  return (
    <main className="container-body py-10">
      <h1 className="text-3xl font-bold mb-6">
        Alle Aktivitäten (Schweiz & Deutschland)
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aktivitaeten.map((a) => {
          const imgUrl = a.image
            ? urlFor(a.image)
                .width(900)
                .height(550)
                .fit("max")
                .bg("ffffff")
                .url()
            : null

          const datumText = formatAktivitaetDatum(a.startDate, a.endDate)

          return (
            <Link
              key={a._id}
              href={`/aktivitaeten/${a.slug.current}`}
              className="block rounded-lg border hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <article>
                {imgUrl && (
                  <div className="w-full h-48 bg-white rounded-t-lg flex items-center justify-center">
                    <Image
                      src={imgUrl}
                      alt={a.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="max-h-48 w-auto object-contain"
                    />
                  </div>
                )}

                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-1">
                    {datumText} &nbsp;–&nbsp; {a.country}
                  </div>
                  <h2 className="text-xl font-semibold text-blue-900">
                    {a.title}
                  </h2>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const aktivitaeten: AktivitaetListItem[] = await client.fetch(`
    *[_type == "aktivitaet"] | order(startDate desc){
      _id,
      title,
      startDate,
      endDate,
      image,
      country,
      slug
    }
  `)

  return { props: { aktivitaeten }}
}
