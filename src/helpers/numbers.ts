const baseOptions = {
  style: 'decimal',
  useGrouping: true,
  currency: 'RUB',
  currencyDisplay: 'symbol',
}
const baseConverter = new Intl.NumberFormat('ru-RU', baseOptions)

export const formatNumber = (value: number | null) => {
  if (value === null) return ''
  return baseConverter.format(value)
}
