import { example } from '..'

describe('example', () => {
  it('returns false when isopen is true', () => {
    const result = example(true)
    expect(result).toBe(false)
  })

  it('returns true when isopen is false', () => {
    const result = example(false)
    expect(result).toBe(true)
  })
})
