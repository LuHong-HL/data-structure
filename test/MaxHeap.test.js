const { MaxHeap } = require('../lib')

describe('MaxHeap unit tests', () => {
  let maxHeap

  describe('new MaxHeap()', () => {
    test('creates an empty maxHeap', () => {
      maxHeap = new MaxHeap()
      expect(maxHeap).toBeInstanceOf(MaxHeap)
    })
  })

  describe('.insert(element)', () => {
    test('should be created the heap of [5, 4, 3, 2, 1]', () => {
      maxHeap.insert(2)
      maxHeap.insert(3)
      maxHeap.insert(4)
      maxHeap.insert(5)
      maxHeap.insert(1)
      expect(maxHeap.heap).toEqual([5, 4, 3, 2, 1])
    })
  })

  describe('.isEmpty()', () => { // D C
    test('should be false', () => {
      expect(maxHeap.isEmpty()).toEqual(false)
    })
  })

  describe('.size()', () => {
    test('should have size of 5', () => {
      expect(maxHeap.size()).toEqual(5)
    })
  })

  describe('.findMaxmum(index)', () => {
    test('should be 1', () => {
      expect(maxHeap.findMaxmum()).toEqual(5)
    })
  })

  describe('.extract(index)', () => {
    test('should be 5', () => {
      expect(maxHeap.extract()).toEqual(5)
    })
    test('should be [4, 2, 3, 1]', () => {
      expect(maxHeap.heap).toEqual([4, 2, 3, 1])
    })
  })

  describe('.clear()', () => {
    test('should be 0', () => {
      maxHeap.clear()
      expect(maxHeap.size()).toEqual(0)
    })
  })

})
