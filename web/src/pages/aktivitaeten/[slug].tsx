// pages/aktivitaeten/[slug].tsx
import Image from "next/image"
import { client, urlFor } from "../../../lib/sanity"

type Aktivitaet = {
  _id: string
  title: string
  date: string
  description?: string
  image?: any
  link?: string
  country: "CH" | "DE" | string
  slug: { current: string }
}

export default function AktivitaetDetail({ aktivitaet }: { aktivitaet: Aktivitaet | null }) {
  if (!aktivitaet) {
    return <main className="container-custom py-10">Aktivität nicht gefunden.</main>
  }

  const imgUrl = aktivitaet.image
    ? urlFor(aktivitaet.image)
        .width(1200)
        .height(700)
        .fit("max")      // nie croppen
        .bg("ffffff")    // weiße Balken
        .url()
    : null

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-bold mb-2">{aktivitaet.title}</h1>
      <p className="text-gray-600 mb-6">
        {new Date(aktivitaet.date).toLocaleDateString("de-CH")} • {aktivitaet.country}
      </p>

      {imgUrl && (
        <div className="w-full bg-white rounded-lg mb-6 flex items-center justify-center">
          <Image
            src={imgUrl}
            alt={aktivitaet.title}
            width={1200}
            height={700}
            className="w-full h-auto object-contain p-2"
          />
        </div>
      )}

      {aktivitaet.description && (
        <p className="mb-6 whitespace-pre-line">{aktivitaet.description}</p>
      )}

      {aktivitaet.link && (
        <a
          href={aktivitaet.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Zum Medienlink
        </a>
      )}
    </main>
  )
}

export async function getStaticPaths() {
  const slugs = await client.fetch<{ slug: { current: string } }[]>(`
    *[_type == "aktivitaet" && defined(slug.current)]{ slug }
  `)

  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug.current } })),
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const aktivitaet: Aktivitaet | null = await client.fetch(
    `
    *[_type == "aktivitaet" && slug.current == $slug][0]{
      _id,
      title,
      date,
      description,
      image,
      link,
      country,
      slug
    }
  `,
    { slug: params.slug }
  )

  return { props: { aktivitaet }, revalidate: 60 }
}
