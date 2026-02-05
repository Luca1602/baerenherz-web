// pages/news/index.tsx
import Link from "next/link"
import Image from "next/image"
import { client, urlFor } from "../../../lib/sanity"

type NewsItem = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  description: string
  image?: any
}

export default function NewsIndex({ news }: { news: NewsItem[] }) {
  return (
    <main className="container-body py-10">
      <h1 className="text-3xl font-bold mb-6">News</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => {
          const imgUrl = n.image
            ? urlFor(n.image)
                .width(900)
                .fit("max")
                .bg("ffffff")
                .url()
            : null

          return (
            <Link
              key={n._id}
              href={`/news/${n.slug.current}`}
              className="block rounded-lg border hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <article>
                {imgUrl && (
                  <div className="relative w-full h-48 bg-white rounded-t-lg overflow-hidden">
                  <Image
                    src={imgUrl}
                    alt={n.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                )}
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-1">
                    {new Date(n.publishedAt).toLocaleDateString("de-CH")}
                  </div>
                  <h2 className="text-xl font-semibold text-blue-900">
                    {n.title}
                  </h2>

                  <p className="mt-2 text-gray-700 line-clamp-3">
                    {n.description}
                  </p>
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
  const news: NewsItem[] = await client.fetch(`
    *[_type == "news"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      description,
      image
    }
  `)

  return { props: { news }}
}
