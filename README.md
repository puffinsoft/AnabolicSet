<p align="center">
    <img src="docs/images/logo.png">
</p>

<p align="center">
    <a href="https://GitHub.com/ColonelParrot/anabolicset/stargazers/"><img src="https://img.shields.io/github/stars/ColonelParrot/anabolicset.svg?style=social&label=Star"></a>
    <br />
    <br />
    <a href="https://www.jsdelivr.com/package/gh/ColonelParrot/anabolicset"><img src="https://data.jsdelivr.com/v1/package/gh/ColonelParrot/anabolicset/badge"></a>
    <a href="https://npmjs.com/package/anabolicset"><img src="https://badgen.net/npm/dw/anabolicset"></a>
    <br />
    <a href="https://github.com/ColonelParrot/anabolicset/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ColonelParrot/anabolicset.svg"></a>
    <a href="https://GitHub.com/ColonelParrot/anabolicset/releases/"><img src="https://img.shields.io/github/release/ColonelParrot/anabolicset.svg"></a>
    <a href="https://npmjs.com/package/anabolicset"><img src="https://badgen.net/npm/v/anabolicset"></a>
</p>

<p align="center">
  <a href="https://nodei.co/npm/anabolicset/"><img src="https://nodei.co/npm/anabolicset.png"></a>
</p>

<i align="center">You'll never use [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) again...</i>

## Featuring...

- custom comparing with custom serializer (similar to Java's [`HashSet`](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html) and `hashCode`)
- improved functionality based upon native [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
  - `union`
  - `intersect`
  - `complement`
  - `isSubsetOf`
  - `isSupersetOf`
  - all native [`Set` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#instance_methods)
- extensive & broad browser support
- blazing fast 💨 ([up to **70%** faster than native Set](https://jsbench.me/zrlebmbyq1/1))

```javascript
const set1 = new AnabolicSet([{ id: 1 }, { id: 2 }, { id: 2 }], (obj) => obj.id)
set1.getValues() // [{id: 1}, {id: 2}]
```

```javascript
const set1 = new AnabolicSet([1, 2, 3, 4, 5])
const set2 = new AnabolicSet([2, 4])

set1.addAll(...[5, 6])
set1.getValues() // [1, 2, 3, 4, 5, 6]

set2.isSubsetOf(set1) // true
set1.isSupersetOf(set2) // true

set2.add(7)
set1.union(set2) // AnabolicSet [1, 2, 3, 4, 5, 6, 7]
```

## Import

npm:

```
npm i anabolicset
```
```javascript
import { AnabolicSet } from 'anabolicset/src/anabolicset'
```

cdn:
```html
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/AnabolicSet@latest/src/anabolicset.min.js"></script>
```
```javascript
const set = new AnabolicSet()
```

