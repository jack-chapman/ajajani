# ajajani

[![npm version](https://badgen.net/npm/v/ajajani)](https://npm.im/ajajani)

Generate **A**d**j**ective, **A**d**j**ective, **Ani**mal strings

> This library is largely a TypeScript port of [a-type/adjective-adjective-animal](https://github.com/a-type/adjective-adjective-animal).

## Todo

- [ ] Custom word dictionaries
- [ ] Formatting options (snake-case, kebab-case, etc.)
- [ ] Custom number of adjectives and animals

## Install

```bash
npm i ajajani
```

## Usage

### ESModule

```typescript
import { generate } from 'ajajani'

const result = generate()
```

### CommonJS

```typescript
const { generate } = require('ajajani')

const result = generate()
```

`generate` will create a random 'Adjective, Adjective, Animal' string like the examples below:

- CommonlawPrecapitalisticBobcat
- InsensitiveSplurgyBlacklab
- MinorPostglacialBushsqueaker
- WearingEvacuatedRoller
- AuthoritativeGermfreeGallinule
- CottonOdorousWhoopingcrane
- SubpentagonalStripedCaecilian
- RetailMarkedGrayreefshark
- PentagonoidSlimArabianhorse
- CyclopeanConcessibleGoat
- SmellySickeningHalibut
- WantedAwestrickenHind
- DimmedHyperbrutalCavy
- QuasidesolateSalmonlikeArkshell
- HumourlessDisturbedFowl

## License

MIT &copy; [Jack Chapman](https://github.com/jack-chapman)
