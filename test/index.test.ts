import { describe, expect, it } from 'vitest'
import { getExports } from '../src'

describe('should', () => {
  it('exported', async () => {
    expect(await getExports('@antfu/utils')).toMatchInlineSnapshot(`
      [
        "assert",
        "at",
        "batchInvoke",
        "clamp",
        "clampArrayRange",
      ]
    `)
  })
})
