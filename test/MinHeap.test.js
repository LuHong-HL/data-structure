const { MinHeap } = require('../lib')

describe('MinHeap unit tests', () => {
  let minHeap

  describe('new MinHeap()', () => {
    test('creates an empty minHeap', () => {
      minHeap = new MinHeap()
      expect(minHeap).toBeInstanceOf(MinHeap)
    })
  })

  describe('.insert(element)', () => {
    test('should be created the heap of [1, 2, 4, 5, 3]', () => {
      minHeap.insert(2)
      minHeap.insert(3)
      minHeap.insert(4)
      minHeap.insert(5)
      minHeap.insert(1)
      expect(minHeap.heap).toEqual([1, 2, 4, 5, 3])
    })
  })

  describe('.isEmpty()', () => { // D C
    test('should be false', () => {
      expect(minHeap.isEmpty()).toEqual(false)
    })
  })

  describe('.size()', () => {
    test('should have size of 5', () => {
      expect(minHeap.size()).toEqual(5)
    })
  })

  describe('.findMinimum(index)', () => {
    test('should be 1', () => {
      expect(minHeap.findMinimum()).toEqual(1)
    })
  })

  describe('.extract(index)', () => {
    test('should be 1', () => {
      expect(minHeap.extract()).toEqual(1)
    })
    test('should be [2, 3, 4, 5]', () => {
      expect(minHeap.heap).toEqual([2, 3, 4, 5])
    })
  })

  describe('.clear()', () => {
    test('should be 0', () => {
      minHeap.clear()
      expect(minHeap.size()).toEqual(0)
    })
  })

})
