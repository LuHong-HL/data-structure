import { Compare, defaultCompare } from '../util'
import { Node } from './models/node'

/**
 * 二叉搜索树类
 * 二叉搜索树（BST）是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。
 */
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn // 比较节点值的函数
    this.root = null // node类型的根节点
  }

  /**
   * 向树中插入一个新的键
   * @param {*} key 键
   */
  insert(key) {
    if (this.root == null) { // 没有根节点的时候
      this.root = new Node(key)
    } else { // 存在根节点的时候
      this.insertNode(this.root, key)
    }
  }

  /**
   * 插入节点
   * @param {*} node 要插入键的节点
   * @param {*} key 键
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // 小于父节点
      if (node.left == null) { // 父节点不存在左节点时
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else { // 大于或者等于父节点
      if (node.right == null) { // 父节点不存在右节点时
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  /**
   * 在树中查找一个键
   * @param {*} key 键
   * @return { boolean }
   */
  search(key) {
    return this.searchNode(this.root, key)
  }

  /**
   * 根据 key 搜索一个节点
   * @param {*} node 节点
   * @param {*} key node的键值
   */
  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    }
    return true

  }

  /**
   * 中序遍历所有节点
   * @param {Function} callback 回调函数
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * 中序遍历节点函数
   * @param {*} node 节点
   * @param {Function} callback 回调函数
   */
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 先序遍历所有节点
   * @param {Function} callback 回调函数
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * 先序遍历节点
   * @param {*} node 节点
   * @param {*} callback 回调函数
   */
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后序遍历所有节点
   * @param {Function} callback 回调函数
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  /**
   * 后序遍历节点
   * @param {*} node 节点
   * @param {*} callback 回调函数
   */
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  /**
   * 返回树中最小的值/键
   */
  min() {
    return this.minNode(this.root)
  }

  /**
   * 获取最小节点
   * @param {*} node 节点
   */
  minNode(node) {
    let current = node
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  /**
   * 返回树中最大的值/键
   */
  max() {
    return this.maxNode(this.root)
  }

  /**
   * 获取最大节点
   * @param {*} node 节点
   */
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  /**
   * 从树中移除某个键
   * @param {*} key 键
   */
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  /**
   * 根据 key 删除node节点
   * @param {*} node node节点
   * @param {*} key 键
   */
  removeNode(node, key) {
    if (node == null) { // 树为空
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // key 小于 node.key
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) { // key 大于 node.key
      node.right = this.removeNode(node.right, key)
      return node
    }
    // key 相等
    // 左右子节点为空
    if (node.left == null && node.right == null) {
      node = null
      return node
    }
    // 其中一个子节点为空
    if (node.left == null) {
      node = node.right
      return node
    } else if (node.right == null) {
      node = node.left
      return node
    }
    // 左右子节点都不为空
    const min = this.minNode(node.right)
    node.key = min.key
    node.right = this.removeNode(node.right, min.key)
    return node
  }

}

export default BinarySearchTree
