import { defaultEquals } from '../util'
import { Node } from './models/linked-list-models'
import LinkedList from './LinkedList'

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev // 指向上一个节点
  }
}


/**
 * 双向链表类
 */
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined // 记录双向链表最后一个节点
  }

  /**
   * 向链表尾部添加一个新元素
   * @param {*} element 元素
   */
  push(element) {
    const node = new DoublyNode(element)
    let current
    if (this.head == null) { // 无节点
      this.head = node
      this.tail = node
    } else {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }
    this.count++
  }

  /**
   * 向任意位置插入一个新的元素
   * @param {*} element 元素
   * @param {*} index 元素插入的位置
   */
  insert(element, index) {
    if (index >= 0 && index <= this.count) { // 检测越界值
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) { // 插入第一位
        if (this.head == null) { // 为空的时候
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) { // 插入最后一项
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else { // 中间任意项
        const previous = this.getElementAt(index -1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }

  /**
   * 根据元素位置来移除元素
   * @param {*} index 移除元素的位置
   */
  removeAt(index) {
    if (index >=0 && index < this.count) { // 检测边界值
      let current = this.head
      if (index === 0) { // 第一项
        this.head = current.next
        if (this.count === 1) { // 只有一项的时候
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count -1) { // 最后一项
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else { // 中间的项
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

export default DoublyLinkedList
