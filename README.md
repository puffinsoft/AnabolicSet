<p align="center">
    <img src="docs/images/logo.png">
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

```javascript
const set1 = new AnabolicSet([{ id: 1 }, { id: 2 }, { id: 2 }], (obj) => obj.id)
set1.getValues() // [{id: 1}, {id: 2}]
```

```javascript
const set1 = new AnabolicSet([1, 2, 3, 4, 5])
const set2 = new AnabolicSet([2, 4])

set1.add([5, 6])
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

cdn:
```html
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/AnabolicSet@latest/src/anabolicset.min.js"></script>
```

