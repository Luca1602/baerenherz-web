export function formatAktivitaetDatum(startDate: string, endDate?: string | null) {
  const pad = (n: number) => String(n).padStart(2, '0')

  const toParts = (iso: string) => {
    const d = new Date(iso + 'T00:00:00') // verhindert TZ-Probleme
    const day = pad(d.getDate())
    const month = pad(d.getMonth() + 1)
    const year = String(d.getFullYear()).slice(-2)
    return { day, month, year }
  }

  const s = toParts(startDate)

  // kein Enddatum oder gleiches Datum => einzelner Tag
  if (!endDate) return `${s.day}.${s.month}.${s.year}`

  const e = toParts(endDate)
  if (endDate === startDate) return `${s.day}.${s.month}.${s.year}`

  return `${s.day}.${s.month}.–${e.day}.${e.month}.${e.year}`
}
