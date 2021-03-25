import { defaultCompare, Compare } from '../util'
// import { Node } from './models/node'

/**
 * 最小堆
 * 它是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧子节点，这叫作结构特性。
 * 二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。
 * 所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作堆特性。
 */
class MinHead {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn // 比较节点值的函数
    this.heap = [] // 数组存储数据
  }

  /**
   * 获取左侧子节点位置
   * @param {Number} index 下标
   * @returns {Number} 左侧子节点位置
   */
  _getLeftIndex(index) {
    return 2 * index + 1
  }

  /**
   * 获取右侧子节点位置
   * @param {Number} index 下标
   * @returns {Number} 右侧子节点位置
   */
  _getRightIndex(index) {
    return 2 * index + 2
  }

  /**
   * 获取父节点位置
   * @param {Number} index 下标
   * @returns {Number | undefined} 父节点节点位置
   */
  _getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  /**
   * 向堆中插入一个新的值
   * @param {*} value 值
   */
  insert(value) {
    if (value != null) {
      this.heap.push(value) // 插入堆的最后
      this._siftUp(this.heap.length - 1) // 上移操作，直到直到比他小的父节点
      return true
    }
    return false
  }

  /**
   * 上移操作
   * @param {Number} index 下标
   */
  _siftUp(index) {
    let parent = this._getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      this._swap(this.heap, parent, index)
      index = parent
      parent = this._getParentIndex(index)
    }
  }

  /**
   * 交换数组的值
   * @param {Array} array 数组
   * @param {Number} a 下标a
   * @param {Number} b 下标b
   */
  _swap(array, a, b) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }

  /**
   * 移除最小值
   * @returns {Number | undefined} 返回当前移除的值
   */
  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap[0]
    this.heap[0] = this.heap[this.size() -1]
    this.heap.pop()
    this._shiftDown(0)
    return removedValue
  }

  /**
   * 下移操作
   * @param {Number} index 下标
   */
  _shiftDown(index) {
    let element = index
    const left = this._getLeftIndex(index)
    const right = this._getRightIndex(index)
    const size = this.size()
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left
    }
    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right
    }
    if (index !== element) {
      this._swap(this.heap, index, element)
      this._shiftDown(element)
    }
  }

  /**
   * 堆的大小
   * @returns {Number}
   */
  size() {
    return this.heap.length
  }

  /**
   * 是否为空
   * @returns {Boolre}
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 清除数据
   */
  clear() {
    this.heap = []
  }

  /**
   * 查找最小的值
   * @returns {Number}
   */
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

}

export default MinHead
