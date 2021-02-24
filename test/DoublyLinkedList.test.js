const { DoublyLinkedList } = require('../lib')

describe('DoublyLinkedList unit tests', () => {
  let doublyLinkedList

  describe('new DoublyLinkedList()', () => {
    test('creates an empty doublyLinkedList', () => {
      doublyLinkedList = new DoublyLinkedList()
      expect(doublyLinkedList).toBeInstanceOf(DoublyLinkedList)
    })
  })

  describe('.insert(element)', () => {
    test('should insert 3 elements to the doublyLinkedList', () => {
      doublyLinkedList.insert('A', 0)
      doublyLinkedList.push('B', 1)
      doublyLinkedList.insert('C', 2)
    })
  })

  describe('.getElementAt(index)', () => { // A B C
    test('should be B', () => {
      expect(doublyLinkedList.getElementAt(1).element).toEqual('B')
    })
  })

  describe('.removeAt(index)', () => {
    test('should be B', () => {
      expect(doublyLinkedList.removeAt(1)).toEqual('B')
    })
  })

  describe('.insert(element, index)', () => { // A C
    test('should be true', () => {
      expect(doublyLinkedList.insert('D', 1)).toEqual(true)
    })
  })

  describe('.indexOf(element)', () => { // A D C
    test('should be 1', () => {
      expect(doublyLinkedList.indexOf('D')).toEqual(1)
    })
  })

  describe('.remove(element)', () => {
    test('should be A', () => {
      expect(doublyLinkedList.remove('A')).toEqual('A')
    })
  })

  describe('.isEmpty()', () => { // D C
    test('should be false', () => {
      expect(doublyLinkedList.isEmpty()).toEqual(false)
    })
  })

  describe('.size()', () => {
    test('should have size of 2', () => {
      expect(doublyLinkedList.size()).toEqual(2)
    })
  })

  describe('.getHead()', () => {
    test('the element should be D', () => {
      expect(doublyLinkedList.getHead().element).toEqual('D')
    })
  })

  describe('.toString()', () => {
    test('should have string of D,C', () => {
      expect(doublyLinkedList.toString()).toEqual('D,C')
    })
  })

})
