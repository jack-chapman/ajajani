import { randomBytes } from 'crypto'

import {
  animalsNormalised as animals,
  adjectivesNormalised as adjectives,
} from './lists'

export const randomAdjective = (): string => {
  const bytes = randomBytes(2)
  let num = bytes.readUInt16LE(0)
  num = num % 16384
  if (num < adjectives.length && adjectives[num]) {
    return adjectives[num]
  } else {
    return randomAdjective()
  }
}

export const randomAnimal = (): string => {
  const bytes = randomBytes(2)
  let num = bytes.readUInt16LE(0)
  num = num % 2048
  if (num < animals.length && animals[num]) {
    return animals[num]
  } else {
    return randomAnimal()
  }
}
