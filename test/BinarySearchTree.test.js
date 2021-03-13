const { BinarySearchTree } = require('../lib')

describe('BinarySearchTree unit tests', () => {
  let tree

  describe('new BinarySearchTree()', () => {
    test('creates an empty tree', () => {
      tree = new BinarySearchTree()
      expect(tree).toBeInstanceOf(BinarySearchTree)
    })
  })

  describe('.insert(key)', () => {
    test('should insert the elements to the tree', () => {
      expect(() => {
        tree.insert(11)
        tree.insert(7)
        tree.insert(15)
        tree.insert(5)
        tree.insert(3)
        tree.insert(9)
        tree.insert(8)
        tree.insert(10)
        tree.insert(13)
        tree.insert(12)
        tree.insert(14)
        tree.insert(20)
        tree.insert(18)
        tree.insert(25)
        tree.insert(6)
      }).not.toThrow()
    })
  })

  describe('.search(key)', () => {
    test('shoud be true', () => {
      expect(tree.search(18)).toEqual(true)
    })
    test('shoud be false', () => {
      expect(tree.search(100)).toEqual(false)
    })
  })

  describe('.inOrderTraverse()', () => {
    test('should be [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.inOrderTraverse(fn)
      expect(array).toEqual([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25])
    })
  })

  describe('.preOrderTraverse()', () => {
    test('should be [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.preOrderTraverse(fn)
      expect(array).toEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])
    })
  })

  describe('.postOrderTraverse()', () => {
    test('should be [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.postOrderTraverse(fn)
      expect(array).toEqual([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11])
    })
  })

  describe('.min()', () => {
    test('should be {key: 3, left: null, right: null}', () => {
      expect(tree.min()).toEqual({key: 3, left: null, right: null})
    })
  })

  describe('.max()', () => {
    test('should be {key: 25, left: null, right: null}', () => {
      expect(tree.max()).toEqual({key: 25, left: null, right: null})
    })
  })

  describe('.remove()', () => {
    test('should be [11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.remove(6)
      tree.preOrderTraverse(fn)
      expect(array).toEqual([11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])
    })
    test('should be [11, 7, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.remove(5)
      tree.preOrderTraverse(fn)
      expect(array).toEqual([11, 7, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])
    })
    test('should be [11, 8, 3, 9, 10, 15, 13, 12, 14, 20, 18, 25]', () => {
      const array = []
      const fn = function(key) {
        array.push(key)
      }
      tree.remove(7)
      tree.preOrderTraverse(fn)
      expect(array).toEqual([11, 8, 3, 9, 10, 15, 13, 12, 14, 20, 18, 25])
    })

  })

})
