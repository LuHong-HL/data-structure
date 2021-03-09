const { HashMap } = require('../lib')

describe('HashMap unit tests', () => {
  let hashMap

  describe('new HashMap()', () => {
    test('creates an empty hashMap', () => {
      hashMap = new HashMap()
      expect(hashMap).toBeInstanceOf(HashMap)
    })
  })

  const objKey = {}
  describe('.set(key, value)', () => {
    test('should set 3 elements to the hashMap', () => {
      hashMap.set('A', 'string')
      hashMap.set(true, 'boolean')
      hashMap.set(objKey, 'object')
    })
  })

  describe('.get(key)', () => {
    test('should be object', () => {
      expect(hashMap.get(objKey)).toEqual('object')
    })
  })

  describe('.size()', () => {
    test('should be 3', () => {
      expect(hashMap.size()).toEqual(3)
    })
  })

  describe('.keys()', () => {
    test("should be [{}, 'A', true]", () => {
      expect(hashMap.keys()).toEqual([{}, 'A', true])
    })
  })

  describe('.values()', () => {
    test("should be ['object', 'string', 'boolean']", () => {
      expect(hashMap.values()).toEqual(['object', 'string', 'boolean'])
    })
  })

  describe('.toString(element)', () => {
    test('should be {170 => [#[object Object]: object]}, {363 => [#A: string]}, {457 => [#true: boolean]}', () => {
      expect(hashMap.toString()).toEqual('{170 => [#[object Object]: object]}, {363 => [#A: string]}, {457 => [#true: boolean]}')
    })
  })

  describe('.isEmpty()', () => {
    test('should be false', () => {
      expect(hashMap.isEmpty()).toEqual(false)
    })
  })

  describe('.forEach(callbackFn)', () => {
    test("should have ['object', 'string', 'boolean']", () => {
      const values = []
      const fn = function(key, value) {
        values.push(value)
        return value !== 'boolean'
      }
      hashMap.forEach(fn)
      expect(values).toEqual(['object', 'string', 'boolean'])
    })
  })

  describe('.hasKey(key)', () => {
    test('the element should be true', () => {
      expect(hashMap.hasKey('A')).toEqual(true)
    })
  })

  describe('.delete()', () => {
    test('the element should be true', () => {
      expect(hashMap.delete(objKey)).toEqual(true)
      expect(hashMap.size()).toEqual(2)
    })
  })

  describe('.clear()', () => {
    test('the element should be 0', () => {
      hashMap.clear()
      expect(hashMap.size()).toEqual(0)
    })
  })

})
