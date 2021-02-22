const { LinkedList } = require('../lib')

describe('LinkedList unit tests', () => {
  let linkedList

  describe('new LinkedList()', () => {
    test('creates an empty linkedList', () => {
      linkedList = new LinkedList()
      expect(linkedList).toBeInstanceOf(LinkedList)
    })
  })

  describe('.push(element)', () => {
    test('should push 3 elements to the linkedList', () => {
      linkedList.push('A')
      linkedList.push('B')
      linkedList.push('C')
    })
  })

  describe('.getElementAt(index)', () => { // A B C
    test('should be B', () => {
      expect(linkedList.getElementAt(1).element).toEqual('B')
    })
  })

  describe('.removeAt(index)', () => {
    test('should be B', () => {
      expect(linkedList.removeAt(1)).toEqual('B')
    })
  })

  describe('.insert(element, index)', () => { // A C
    test('should be true', () => {
      expect(linkedList.insert('D', 1)).toEqual(true)
    })
  })

  describe('.indexOf(element)', () => { // A D C
    test('should be 1', () => {
      expect(linkedList.indexOf('D')).toEqual(1)
    })
  })

  describe('.remove(element)', () => {
    test('should be A', () => {
      expect(linkedList.remove('A')).toEqual('A')
    })
  })

  describe('.isEmpty()', () => { // D C
    test('should be false', () => {
      expect(linkedList.isEmpty()).toEqual(false)
    })
  })

  describe('.size()', () => {
    test('should have size of 2', () => {
      expect(linkedList.size()).toEqual(2)
    })
  })

  describe('.getHead()', () => {
    test('the element should be D', () => {
      expect(linkedList.getHead().element).toEqual('D')
    })
  })

  describe('.toString()', () => {
    test('should have string of D,C', () => {
      expect(linkedList.toString()).toEqual('D,C')
    })
  })

})
