/**
 * 栈
 */
class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }

  // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 如果队列中不包含任何元素，返回 true，否则返回 false
  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  // 返回队列包含的元素个数，与数组的 length 属性类似
  size () {
    return this.count - this.lowestCount
  }

  // 清空队列中所有的元素
  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // 返回字符串
  toString () {
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

export default Queue