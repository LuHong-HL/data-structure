/**
 * 集合类
 */
class Set {
  constructor() {
    this.items = {}
  }

  /**
   * 向集合添加一个新元素
   * @param {*} element 元素
   */
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  /**
   * 从集合中移除一个元素
   * @param {*} element 元素
   */
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  /**
   * 判断元素是否在集合中，存在则返回true,否则返回false
   * @param {*} element 元素
   */
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  /**
   * 移除集合中的所有元素
   */
  clear() {
    this.items = {}
  }

  /**
   * 返回集合所包含元素的数量
   */
  size() {
    return Object.keys(this.items).length
  }

  /**
   * 返回一个包含集合中所有元素的数组
   */
  values() {
    return Object.values(this.items)
  }
}

export default Set
