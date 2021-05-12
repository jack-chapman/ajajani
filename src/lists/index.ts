import { animals } from './animals'
import { adjectives } from './adjectives'

export const animalsNormalised = animals.map((word) => word.toLowerCase())
export const adjectivesNormalised = adjectives.map((word) => word.toLowerCase())
