import { describe, it, expect } from 'vitest'

describe('hello', async () => {
  it('world', () => {
    expect('hello world').to.contain('hello world')
  })
})
