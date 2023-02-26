<p align="center">
    <img src="docs/images/logo.png">
</p>

<p align="center">
    <a href="https://GitHub.com/ColonelParrot/anabolicset/stargazers/"><img src="https://img.shields.io/github/stars/ColonelParrot/anabolicset.svg?style=social&label=Star"></a>
    <br />
    <br />
    <a href="https://github.com/ColonelParrot/anabolicset/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ColonelParrot/anabolicset.svg"></a>
    <a href="https://GitHub.com/ColonelParrot/anabolicset/releases/"><img src="https://img.shields.io/github/release/ColonelParrot/anabolicset.svg"></a>
    <a href="https://npmjs.com/package/anabolicset"><img src="https://badgen.net/npm/v/anabolicset"></a>
</p>

<p align="center">
  <a href="https://nodei.co/npm/anabolicset/"><img src="https://nodei.co/npm/anabolicset.png"></a>
</p>

<i align="center">You'll never use [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) again...</i>

AnabolicSet is built around the optional ability to customize item comparisons with a custom serializer. The uniqueness is guaranteed for the return value of the serializer.

This allows you to do things like:

```javascript
const set1 = new AnabolicSet([{ id: 1 }, { id: 2 }, { id: 2 }], (obj) => obj.id) // <-- serializer
set1.values() // [{id: 1}, {id: 2}]
```

## Featuring...

- custom comparing with custom serializer (similar to Java's [`HashSet`](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html) and `hashCode`)
- improved functionality based upon native [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
  - [`union`](https://github.com/ColonelParrot/AnabolicSet/wiki#--unionset)
  - [`intersect`](https://github.com/ColonelParrot/AnabolicSet/wiki#--intersectset)
  - [`complement`](https://github.com/ColonelParrot/AnabolicSet/wiki#--complementset)
  - [`isSubsetOf`](https://github.com/ColonelParrot/AnabolicSet/wiki#--issubsetofset)
  - [`isSupersetOf`](https://github.com/ColonelParrot/AnabolicSet/wiki#--issupersetofset)
  - all native [`Set` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#instance_methods)
- extensive & broad browser support
- blazing fast 💨 ([up to **70%** faster than native Set](https://jsbench.me/zrlebmbyq1/1) for certain operations)

```javascript
const set1 = new AnabolicSet([1, 2, 3, 4, 5])
const set2 = new AnabolicSet([2, 4])

set1.addAll(...[5, 6])
set1.values() // [1, 2, 3, 4, 5, 6]

set2.isSubsetOf(set1) // true
set1.isSupersetOf(set2) // true

set2.add(7)
set1.union(set2) // AnabolicSet [1, 2, 3, 4, 5, 6, 7]
```

## Import

**npm**:
```javascript
$ npm i anabolicset
import { AnabolicSet } from 'anabolicset/src/anabolicset'
```

**cdn**:
```html
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/AnabolicSet@latest/src/anabolicset.min.js"></script>
```

<p align="center">
  <a href="https://github.com/ColonelParrot/AnabolicSet/wiki">documentation</a>
</p>