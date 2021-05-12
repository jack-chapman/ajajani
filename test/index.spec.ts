import { generate } from '../src/index'

test('test generate is random', () => {
  const numToGenerate = 10000
  const results1 = []
  for (let i = 0; i < numToGenerate; i++) {
    results1.push(generate())
  }

  const results2 = []
  for (let i = 0; i < numToGenerate; i++) {
    results2.push(generate())
  }

  for (const result in results1) {
    expect(results2.includes(result)).toBe(false)
  }
})
