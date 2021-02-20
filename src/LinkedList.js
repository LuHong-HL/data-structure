import { defaultEquals } from '../util'
import { Node } from './models/linked-list-models'

/**
 * 链表类
 */
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0 // 链表中元素数量
    this.head = undefined // 保存第一个元素的引用
    this.equalsFn = equalsFn // 比较链表中的函数是否相等的函数 默认 defaultEquals
  }

  /**
   * 向链表尾部添加一个新元素
   * @param {*} element 元素
   */
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  /**
   * 向链表的特定位置插入一个新元素
   * @param {*} element 元素
   * @param {*} index 插入元素的位置
   */
  insert(element, index) {
    if (index >= 0 && index <= this.count) { // 检查是否越界
      const node = new Node(element)
      if (index === 0) { // 第一个位置
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  /**
   * 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
   * @param {*} index 元素的位置
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  /**
   * 从链表中移除一个元素
   * @param {*} element 元素
   */
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * 返回元素在链表中的索引。如果链表中没有改元素则返回 -1
   * @param {*} element 元素
   */
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  /**
   * 从链表的特定位置移除一个元素
   * @param {*} index 元素的位置
   */
  removeAt(index) {
    if (index >= 0 && index < this.count) { // 检查越界值
      let current = this.head
      if (index === 0) { // 移除第一项
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next // 将previous 与 current 的下一项链接起来：跳过 current,从而移除它
      }
      this.count--
      return current.element
    }
    return undefined
  }

  /**
   * 判断链表是否为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 返回链表包含的元素个数
   */
  size() {
    return this.count
  }

  /**
   * 获取链表的头节点
   */
  getHead() {
    return this.head
  }

  /**
   * 返回表示整个链表的字符串
   */
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
