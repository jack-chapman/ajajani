import { randomAdjective, randomAnimal } from './crypto'
import { capitalise } from './utils'

export const generate = (): string => {
  const numAdjectives = 2

  const parts = []

  for (let i = 0; i < numAdjectives; i++) {
    parts.push(capitalise(randomAdjective()))
  }

  parts.push(capitalise(randomAnimal()))

  return parts.join('')
}
