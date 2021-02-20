const Deque = require('../lib').Deque

describe('Deque unit tests', () => {
  const deque = new Deque()

  describe('.isEmpty()', () => {
    test('should be empty', () => {
      expect(deque.isEmpty()).toEqual(true)
    })
  })

  describe('.addBack(element)', () => {
    test('should addBack 3 elements to the deque', () => {
      deque.addBack('A')
      deque.addBack('B')
      deque.addBack('C')
      expect(deque.items).toEqual({0: 'A', 1: 'B', 2: 'C'})
    })
  })

  describe('.toString()', () => {
    test('should have string of A,B,C', () => {
      expect(deque.toString()).toEqual('A,B,C')
    })
  })

  describe('.size()', () => {
    test('should have size of 3', () => {
      expect(deque.size()).toEqual(3)
    })
  })

  describe('.removeFront()', () => {
    test('should removeFront the element of A', () => {
      expect(deque.removeFront()).toEqual('A')
    })
  })

  describe('.removeBack()', () => {
    test('should removeBack the element of C', () => {
      expect(deque.removeBack()).toEqual('C')
    })
  })

  describe('.addFront(element)', () => {
    test('should addFront the element of D', () => {
      deque.addFront('D')
      expect(deque.items).toEqual({0: 'D', 1: 'B'})
    })
  })

  describe('.peekFront()', () => {
    test('should peekFront the element of D', () => {
      expect(deque.peekFront()).toEqual('D')
    })
  })

  describe('.peekBack()', () => {
    test('should peekBack the element of B', () => {
      expect(deque.peekBack()).toEqual('B')
    })
  })

  describe('.clear()', () => {
    test('should clear the deque', () => {
      deque.clear()
      expect(deque.removeFront()).toEqual(undefined)
      expect(deque.removeBack()).toEqual(undefined)
      expect(deque.peekFront()).toEqual(undefined)
      expect(deque.peekBack()).toEqual(undefined)
      expect(deque.size()).toEqual(0)
      expect(deque.isEmpty()).toEqual(true)
    })
  })

})
