import { Stack } from '../lib/index'

describe('stack tests', () => {
  const stack = new Stack()

  describe('.push(element)', () => {
    test('should push elements to the top of the stack', () => {
      stack.push(1)
      stack.push(2)
      stack.push('3th')
    })
  })

  describe('.size()', () => {
    test('should have length of 3', () => {
      expect(stack.size()).toEqual(3)
    })
  })

  describe('.isEmpty()', () => {
    test('should not be empty', () => {
      expect(stack.isEmpty()).toEqual(false)
    })
  })

  describe('.peek()', () => {
    test('should peek the top element', () => {
      expect(stack.peek()).toEqual('3th')
    })
  })

  describe('.toString()', () => {
    test('should have string of 1,2,3th', () => {
      expect(stack.toString()).toEqual('1,2,3th')
    })
  })

  describe('.pop()', () => {
    test('should pop the elements', () => {
      expect(stack.pop()).toEqual('3th')
      expect(stack.pop()).toEqual(2)
    })
  })

  describe('.clear()', () => {
    test('should clear the stack', () => {
      stack.clear()
      expect(stack.pop()).toEqual(undefined)
      expect(stack.peek()).toEqual(undefined)
      expect(stack.size()).toEqual(0)
      expect(stack.isEmpty()).toEqual(true)
    })
  })

})