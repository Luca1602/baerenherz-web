// pages/news/[slug].tsx
import Image from "next/image"
import { client, urlFor } from "../../../lib/sanity"

type NewsDetail = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  description: string
  image?: any
}

export default function NewsDetailPage({ item }: { item: NewsDetail | null }) {
  if (!item) {
    return <main className="container-body py-10">News nicht gefunden.</main>
  }

  const imgUrl = item.image
    ? urlFor(item.image).width(1400).height(800).fit("max").bg("ffffff").url()
    : null

  return (
    <main className="container-body py-10">
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>

      <p className="text-gray-600 mb-6">
        Veröffentlichungsdatum: <b>{new Date(item.publishedAt).toLocaleDateString("de-CH")}</b>
      </p>

      {imgUrl && (
        <div className="w-full bg-white rounded-lg mb-6 flex justify-center">
          <div className="max-w-3xl w-full">
            <Image
              src={imgUrl}
              alt={item.title}
              width={1400}
              height={800}
              className="w-full h-auto object-contain p-2 rounded-lg"
            />
          </div>
        </div>
      )}

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {item.description}
      </p>
    </main>
  )
}

export async function getStaticPaths() {
  const slugs = await client.fetch<{ slug: { current: string } }[]>(`
    *[_type == "news" && defined(slug.current)]{ slug }
  `)

  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug.current } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug
  if (!slug) return { notFound: true}

  const item: NewsDetail | null = await client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      description,
      image
    }
  `,
    { slug }
  )

  if (!item) return { notFound: true}

  return { props: { item }}
}
