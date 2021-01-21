/**
 * 栈
 */
class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }
  // 向栈添加元素
  push(element) {
    this.items[this.count] = element
    this.count++
  }

  // 从栈移除元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 检查栈是否为空
  isEmpty() {
    return this.count === 0
  }

  // 返回栈里的元素个数
  size() {
    return this.count
  }

  // 返回对象的字符串表示形式
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

export default Stack