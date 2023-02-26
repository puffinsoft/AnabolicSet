/**
 * run with `npm test`
 */

const assert = require('assert')

const AnabolicSet = require('../src/anabolicset')

function newSet(...rest) {
    return new AnabolicSet(...rest)
}

describe('constructor() test', () => {
    it('should handle empty array', () => {
        const set = newSet([])
        assert.deepEqual(set.values(), [])
    })
    it('should handle populated array', () => {
        const set = newSet([1, 2, 3, 3])
        assert.deepEqual(set.values(), [1, 2, 3])
    })
    it('should handle string serializer', () => {
        const set = newSet(['abc', 'acd', 'bce'], (str) => str[0])
        assert.deepEqual(set.values(), ['acd', 'bce'])
    })
    it('should handle object serializer', () => {
        const set = newSet([{ id: 1 }, { id: 2 }, { id: 2 }], (obj) => obj.id)
        assert.deepEqual(set.values(), [{ id: 1 }, { id: 2 }])
    })
})

describe('addAll() test', () => {
    it('should add multiple parameters', () => {
        const set = newSet([1, 2])
        set.addAll(2, 3, 4)
        assert.deepEqual(set.values(), [1, 2, 3, 4])
    })
    it('should handle spreaded array', () => {
        const set = newSet([1, 2])
        set.addAll(...[2, 3, 4])
        assert.deepEqual(set.values(), [1, 2, 3, 4])
    })
})

describe('setValues() test', () => {
    it('should set values', () => {
        const set = newSet([1, 2, 3, 4, 5])
        set.setValues([1, 2])
        assert.deepEqual(set.values(), [1, 2])
    })
})

describe('setSerializer() test', () => {
    it('should use serializer', () => {
        const set = newSet([])
        set.setSerializer((obj) => obj.id)
        set.addAll(...[{ id: 1 }, { id: 2 }, { id: 2 }])
        assert.deepEqual(set.values(), [{ id: 1 }, { id: 2 }])
    })
})

describe('union() test', () => {
    it('should combine distinct sets', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([3, 4])
        const result = set1.union(set2)
        assert.deepEqual(result.values(), [1, 2, 3, 4])
    })
    it('should handle overlapping values', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([2, 3])
        const result = set1.union(set2)
        assert.deepEqual(result.values(), [1, 2, 3])
    })
    it('should use serializer', () => {
        const set1 = newSet([{ id: 1 }, { id: 2 }], (obj) => obj.id)
        const set2 = newSet([{ id: 3 }, { id: 4 }], (obj) => obj.id)
        const result = set1.union(set2)
        assert.deepEqual(result.values(), [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
    })
})

describe('intersect() test', () => {
    it('should find no intersection', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([3, 4])
        assert.deepEqual(set1.intersect(set2), [])
    })
    it('should find all intersection', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([2, 1])
        assert.deepEqual(set1.intersect(set2), [1, 2])
    })
    it('should find partial intersection', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([2, 3])
        assert.deepEqual(set1.intersect(set2), [2])
    })
    it('should use serializer', () => {
        const set1 = newSet([{ id: 1 }, { id: 2 }], (obj) => obj.id)
        const set2 = newSet([{ id: 2 }, { id: 3 }], (obj) => obj.id)
        assert.deepEqual(set1.intersect(set2), [{ id: 2 }])
    })
})

describe('complement() test', () => {
    it('should find no complements', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([2, 1])
        assert.deepEqual(set1.complement(set2), [])
    })
    it('should find all complements, both ways', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([3, 4])
        assert.deepEqual(set1.complement(set2), [1, 2])
        assert.deepEqual(set2.complement(set1), [3, 4])
    })
    it('should find partial complements', () => {
        const set1 = newSet([1, 2])
        const set2 = newSet([2, 3])
        assert.deepEqual(set1.complement(set2), [1])
    })
    it('should use serializer', () => {
        const set1 = newSet([{ id: 1 }, { id: 2 }], (obj) => obj.id)
        const set2 = newSet([{ id: 2 }, { id: 3 }], (obj) => obj.id)
        assert.deepEqual(set1.complement(set2), [{ id: 1 }])
    })
})

describe('isSubsetOf/isSupersetOf() test', () => {
    it('should find subset', () => {
        const set1 = newSet([1, 2, 3, 4])
        const set2 = newSet([2, 3])
        assert.equal(set2.isSubsetOf(set1), true)
        assert.equal(set1.isSupersetOf(set2), true)
    })
    it('should not find subset', () => {
        const set1 = newSet([1, 2, 3, 4])
        const set2 = newSet([5, 6])
        assert.equal(set2.isSubsetOf(set1), false)
        assert.equal(set1.isSupersetOf(set2), false)
    })
    it('should not find subset even with overlap', () => {
        const set1 = newSet([1, 2, 3, 4])
        const set2 = newSet([4, 5])
        assert.equal(set2.isSubsetOf(set1), false)
        assert.equal(set1.isSupersetOf(set2), false)
    })
    it('should use serializer', () => {
        const set1 = newSet([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], (obj) => obj.id)
        const set2 = newSet([{ id: 2 }, { id: 3 }], (obj) => obj.id)
        assert.equal(set2.isSubsetOf(set1), true)
        assert.equal(set1.isSupersetOf(set2), true)
    })
})