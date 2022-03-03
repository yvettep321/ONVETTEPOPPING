import { expect } from 'chai'

import { forceUnwrap } from '../../src/lib/fatal-error'

describe('forceUnwrap', () => {
  it('fails for null', () => {
    const message = 'null is an expected failure'
    try {
      forceUnwrap(message, null)
    } catch (e) {
      const error = e as Error
      expect(error.message).equals(message)
    }
  })

  it('fails for undefined', () => {
    const message = 'undefined is an expected failure'
    try {
      forceUnwrap(message, undefined)
    } catch (e) {
      const error = e as Error
      expect(error.message).equals(message)
    }
  })

  it('passes for false', () => {
    expect(forceUnwrap('false is an expected value', false)).to.equal(false)
  })

  it('passes for a hash', () => {
    const a = { b: 4 }
    expect(forceUnwrap('hash is an expected value', a)).to.deep.equal(a)
  })
})
