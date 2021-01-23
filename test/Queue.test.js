import { Queue } from '../lib/index'

describe('Queue unit tests', () => {
  let queue

  describe('new Queue()', () => {
    test('creates an empty queue', () => {
      queue = new Queue()
    })
  })

  describe('.enqueue(element)', () => {
    test('should enqueue 3 elements to the stack', () => {
      queue.enqueue(3)
      queue.enqueue(2)
      queue.enqueue(1)
    })
  })

  describe('.size()', () => {
    test('should have size of 3', () => {
      expect(queue.size()).toEqual(3)
    })
  })

  describe('.peek()', () => {
    test('should peek the peek element', () => {
      expect(queue.peek()).toEqual(3)
    })
  })

  describe('.isEmpty()', () => {
    test('should not be empty', () => {
      expect(queue.isEmpty()).toEqual(false)
    })
  })

  describe('.dequeue()', () => {
    test('should dequeue the elements', () => {
      expect(queue.dequeue()).toEqual(3)
    })
  })

  describe('.toString()', () => {
    test('should have string of 2,1', () => {
      expect(queue.toString()).toEqual('2,1')
    })
  })

  describe('.clear()', () => {
    test('should clear the queue', () => {
      queue.clear()
      expect(queue.dequeue()).toEqual(undefined)
      expect(queue.peek()).toEqual(undefined)
      expect(queue.size()).toEqual(0)
      expect(queue.isEmpty()).toEqual(true)
    })
  })

})