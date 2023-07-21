import { formatNumber } from '../numbers'

describe('formatNumber', () => {
  test('123456 -> 123 456', () => {
    expect((/123\s456/).test(formatNumber(123456))).toBeTruthy()
  })
  test('987123456 -> 987 123 456', () => {
    expect((/987\s123\s456/).test(formatNumber(987123456))).toBeTruthy()
  })
  test('12.722 -> 12,722', () => {
    expect(formatNumber(12.722)).toBe('12,722')
  })
  test('null -> ""', () => {
    expect(formatNumber(null)).toBe('')
  })
})
