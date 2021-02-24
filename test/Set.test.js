const { Set } = require('../lib')

describe('Set unit tests', () => {
  let set

  describe('new Set()', () => {
    test('creates an empty set', () => {
      set = new Set()
      expect(set).toBeInstanceOf(Set)
    })
  })

  describe('.add(element)', () => {
    test('should add 3 elements to the set', () => {
      set.add('A')
      set.add('B')
      set.add('C')
      expect(set.items).toEqual({ A: 'A', B: 'B', C: 'C'})
    })
  })

  describe('.values()', () => { // A B C
    test("should be ['A', 'B', 'C']", () => {
      expect(set.values()).toEqual(['A', 'B', 'C'])
    })
  })

  describe('.delete(element)', () => {
    test('should be true', () => {
      expect(set.delete('B')).toEqual(true)
    })
  })

  describe('.has(element)', () => { // A C
    test('should be false', () => {
      expect(set.has('B')).toEqual(false)
    })
  })

  describe('.size()', () => {
    test('should be 2', () => {
      expect(set.size()).toEqual(2)
    })
  })

  describe('.clear()', () => {
    test('should be []', () => {
      set.clear()
      expect(set.values()).toEqual([])
    })
  })
})
