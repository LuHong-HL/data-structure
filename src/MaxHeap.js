import MinHeap from './MinHeap'
import { defaultCompare } from '../util'

/**
 * 最大堆
 * 它是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧子节点，这叫作结构特性。
 * 二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。
 * 所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作堆特性。
 */
export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = this._reverseCompare(compareFn)
  }

  /**
   * 反正比较
   * @param {Function} compareFn 比较函数
   * @returns {Function}
   */
  _reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a)
  }

  /**
   * 查找最大的值
   * @returns {Number}
   */
  findMaxmum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }
}


export default MaxHeap
