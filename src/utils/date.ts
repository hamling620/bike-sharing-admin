const addZeroFormat = (n: number): string => {
  return n < 10 ? '0' + n : '' + n
}

export const parseTime = (d: Date | number, format?: string): string => {
  if (!d) return ''
  d = new Date(d)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()

  if (!format) return `${year}-${addZeroFormat(month)}-${addZeroFormat(date)} ${addZeroFormat(hours)}:${addZeroFormat(minutes)}:${addZeroFormat(seconds)}`
  return 'developeing'
}
