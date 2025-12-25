import { defineType, defineField } from "sanity"

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Veröffentlichungsdatum",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD.MM.YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    }),

    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: "Kurzbeschreibung (z. B. 1–3 Sätze).",
    }),

    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { title, media, publishedAt } = selection as {
        title?: string
        media?: any
        publishedAt?: string
      }

      const dateLabel = publishedAt
        ? new Date(publishedAt).toLocaleDateString("de-CH")
        : "Kein Datum"

      return {
        title: title ?? "Ohne Titel",
        subtitle: `Veröffentlicht: ${dateLabel}`,
        media,
      }
    },
  },
})
