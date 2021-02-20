/**
 * 双端队列
 */
class Deque {
  constructor() {
    this.count = 0 // 控制队列的大小
    this.lowestCount = 0 // 记录队列第一个元素位置
    this.items = {} // 存储元素对象
  }

  /**
   * 在双端队列前添加新的元素
   * @param {*} element 元素
   */
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  /**
   * 在双端队列后端添加新元素
   * @param {*} element 元素
   */
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * 在双端队列前端移除第一个元素
   */
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  /**
   * 在双端队列后端移除第一个元素
   */
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  /**
   * 返回双端队列前端的一个元素
   */
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  /**
   * 返回双端队列后端的第一个元素
   */
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  /**
     * 如果队列中不包含任何元素，返回 true，否则返回 false
     */
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  /**
     * 返回队列包含的元素个数，与数组的 length 属性类似
     */
  size() {
    return this.count - this.lowestCount
  }

  /**
     * 清空队列中所有的元素
     */
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  /**
     * 返回字符串
     */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

export default Deque
