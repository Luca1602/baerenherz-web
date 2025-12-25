import { defineType } from 'sanity'

export default defineType({
  name: 'aktivitaet',
  title: 'Aktivität',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
    },
    {
      name: 'startDate',
      title: 'Startdatum',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'Enddatum',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      description: 'Nur ausfüllen, wenn die Aktivität mehrere Tage dauert',
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = (context.document as any)?.startDate
          if (!endDate) return true
          if (!startDate) return 'Bitte zuerst ein Startdatum setzen.'
          return endDate >= startDate ? true : 'Enddatum muss nach dem Startdatum liegen.'
        }),
    },
    { name: 'description', title: 'Beschreibung', type: 'text' },
    { name: 'image', title: 'Bild', type: 'image' },
    { name: 'link', title: 'Medienlink', type: 'url' },
    {
      name: 'country',
      title: 'Land der Aktivität',
      type: 'string',
      options: {
        list: [
          { title: 'Schweiz', value: 'Schweiz' },
          { title: 'Deutschland', value: 'Deutschland' },
        ],
      },
    },
  ],
})
