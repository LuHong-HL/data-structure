import { defaultCompare } from '../util'
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
  getLeftIndex(index) {
    return 2 * index + 1
  }

  /**
   * 获取右侧子节点位置
   * @param {Number} index 下标
   * @returns {Number} 右侧子节点位置
   */
  getRightIndex(index) {
    return 2 * index + 2
  }

  /**
   * 获取父节点位置
   * @param {Number} index 下标
   * @returns {Number | undefined} 父节点节点位置
   */
  getParentIndex(index) {
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
      this.siftUp(this.heap.length - 1) // 上移操作，直到直到比他小的父节点
      return true
    }
    return false
  }

  /**
   * 移除最小值
   */
  extract() {

  }

  /**
   * 返回最小值
   */
  findMinimum() {

  }

  // /**
  //  * 插入节点
  //  * @param {*} node 要插入键的节点
  //  * @param {*} key 键
  //  */
  // insertNode(node, key) {
  //   if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // 小于父节点
  //     if (node.left == null) { // 父节点不存在左节点时
  //       node.left = new Node(key)
  //     } else {
  //       this.insertNode(node.left, key)
  //     }
  //   } else { // 大于或者等于父节点
  //     if (node.right == null) { // 父节点不存在右节点时
  //       node.right = new Node(key)
  //     } else {
  //       this.insertNode(node.right, key)
  //     }
  //   }
  // }

  // /**
  //  * 在树中查找一个键
  //  * @param {*} key 键
  //  * @return { boolean }
  //  */
  // search(key) {
  //   return this.searchNode(this.root, key)
  // }

  // /**
  //  * 根据 key 搜索一个节点
  //  * @param {*} node 节点
  //  * @param {*} key node的键值
  //  */
  // searchNode(node, key) {
  //   if (node == null) {
  //     return false
  //   }
  //   if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
  //     return this.searchNode(node.left, key)
  //   } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
  //     return this.searchNode(node.right, key)
  //   }
  //   return true

  // }

  // /**
  //  * 中序遍历所有节点
  //  * @param {Function} callback 回调函数
  //  */
  // inOrderTraverse(callback) {
  //   this.inOrderTraverseNode(this.root, callback)
  // }

  // /**
  //  * 中序遍历节点函数
  //  * @param {*} node 节点
  //  * @param {Function} callback 回调函数
  //  */
  // inOrderTraverseNode(node, callback) {
  //   if (node != null) {
  //     this.inOrderTraverseNode(node.left, callback)
  //     callback(node.key)
  //     this.inOrderTraverseNode(node.right, callback)
  //   }
  // }

  // /**
  //  * 先序遍历所有节点
  //  * @param {Function} callback 回调函数
  //  */
  // preOrderTraverse(callback) {
  //   this.preOrderTraverseNode(this.root, callback)
  // }

  // /**
  //  * 先序遍历节点
  //  * @param {*} node 节点
  //  * @param {*} callback 回调函数
  //  */
  // preOrderTraverseNode(node, callback) {
  //   if (node != null) {
  //     callback(node.key)
  //     this.preOrderTraverseNode(node.left, callback)
  //     this.preOrderTraverseNode(node.right, callback)
  //   }
  // }

  // /**
  //  * 后序遍历所有节点
  //  * @param {Function} callback 回调函数
  //  */
  // postOrderTraverse(callback) {
  //   this.postOrderTraverseNode(this.root, callback)
  // }

  // /**
  //  * 后序遍历节点
  //  * @param {*} node 节点
  //  * @param {*} callback 回调函数
  //  */
  // postOrderTraverseNode(node, callback) {
  //   if (node != null) {
  //     this.postOrderTraverseNode(node.left, callback)
  //     this.postOrderTraverseNode(node.right, callback)
  //     callback(node.key)
  //   }
  // }

  // /**
  //  * 返回树中最小的值/键
  //  */
  // min() {
  //   return this.minNode(this.root)
  // }

  // /**
  //  * 获取最小节点
  //  * @param {*} node 节点
  //  */
  // minNode(node) {
  //   let current = node
  //   while (current != null && current.left != null) {
  //     current = current.left
  //   }
  //   return current
  // }

  // /**
  //  * 返回树中最大的值/键
  //  */
  // max() {
  //   return this.maxNode(this.root)
  // }

  // /**
  //  * 获取最大节点
  //  * @param {*} node 节点
  //  */
  // maxNode(node) {
  //   let current = node
  //   while (current != null && current.right != null) {
  //     current = current.right
  //   }
  //   return current
  // }

  // /**
  //  * 从树中移除某个键
  //  * @param {*} key 键
  //  */
  // remove(key) {
  //   this.root = this.removeNode(this.root, key)
  // }

  // /**
  //  * 根据 key 删除node节点
  //  * @param {*} node node节点
  //  * @param {*} key 键
  //  */
  // removeNode(node, key) {
  //   if (node == null) { // 树为空
  //     return null
  //   }
  //   if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // key 小于 node.key
  //     node.left = this.removeNode(node.left, key)
  //     return node
  //   } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) { // key 大于 node.key
  //     node.right = this.removeNode(node.right, key)
  //     return node
  //   }
  //   // key 相等
  //   // 左右子节点为空
  //   if (node.left == null && node.right == null) {
  //     node = null
  //     return node
  //   }
  //   // 其中一个子节点为空
  //   if (node.left == null) {
  //     node = node.right
  //     return node
  //   } else if (node.right == null) {
  //     node = node.left
  //     return node
  //   }
  //   // 左右子节点都不为空
  //   const min = this.minNode(node.right)
  //   node.key = min.key
  //   node.right = this.removeNode(node.right, min.key)
  //   return node
  // }

}

export default MinHead
