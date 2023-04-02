import { appendPixels, getSizedPixels } from '../functions'
import { Sizes } from '../types'

describe('appendPixels', () => {
  it('should append pixels to a number value', () => {
    const result = appendPixels(10)
    expect(result).toBe('10px')
  })

  it('should not append pixels to null or undefined values', () => {
    const resultNull = appendPixels(null)
    const resultUndefined = appendPixels(undefined)

    expect(resultNull).toBeNull()
    expect(resultUndefined).toBeUndefined()
  })

  it('should return input value if it is zero', () => {
    const result = appendPixels(0)

    expect(result).toBe(0)
  })
})

describe('getSizedPixels', () => {
  it('should return same if value is undefined', () => {
    const result = getSizedPixels(undefined)

    expect(result).toBeUndefined()
  })

  it('should return input value in pixels by default', () => {
    const result = getSizedPixels(40)

    expect(result).toBe('40px')
  })

  it('should increase size for large values', () => {
    const result = getSizedPixels(80, 'large')

    expect(result).toBe('88px')
  })

  it('should decrease size for small values', () => {
    const result = getSizedPixels(80, 'small')

    expect(result).toBe('72px')
  })

  it('should return input value in pixels for invalid size arguments', () => {
    const result = getSizedPixels(60, 'invalid_size' as Sizes)

    expect(result).toBe('60px')
  })
})
