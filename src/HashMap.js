import { defaultToString } from '../util'
import { ValuePair } from './models/value-pair'

/**
 * 字典类（散列表实现）
 */
class HashMap {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * 向散列表增加一个新的项
   * @param {*} key 键
   * @param {*} value 值
   */
  set(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index] != null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  /**
   * 根据键值移除值
   * @param {*} key 键
   */
  delete(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }

  /**
   * 根据键值返回特定的值
   * @param {*} key 键
   */
  get(key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value
      }
    }
    return undefined
  }

  /**
   * 通过散列函数获取 hashcode
   * @param {*} key 键
   */
  hashCode(key) {
    return this.djb2HashCode(key)
  }

  /**
 * 散列函数 djb2
 * @param {*} key 键值
 */
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key)
    let hash = 5381
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i)
    }
    return hash % 1013
  }

  /**
   *  将删除后的元素移动到合适的位置上
   * @param {*} key 键
   * @param {*} deletedPosition 移除位置
   */
  verifyRemoveSideEffect(key, deletedPosition) {
    const hash = this.hashCode(key)
    let index = deletedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= deletedPosition) {
        this.table[deletedPosition] = this.table[index]
        delete this.table[index]
        deletedPosition = index
      }
      index++
    }
  }


  /**
   * 判断某键值是否存在散列表中
   * @param {*} key 键值
   */
  hasKey(key) {
    return this.table[this.hashCode(key)] != null
  }

  /**
   * 删除字典中所有值
   */
  clear() {
    this.table = {}
  }

  /**
   * 返回字典包含的数量
   */
  size() {
    return Object.keys(this.table).length
  }

  /**
   * 字典是否为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 将字典所包含的所有键名以数组形式返回
   */
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }

  /**
   * 将字典所包含的所有数值以数组形式返回
   */
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }

  /**
   * 将字典中所有[{键，值}]对返回
   */
  keyValues() {
    return Object.values(this.table)
  }

  /**
   * 迭代字典中所有的键值对
   * callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回 false 时被中止
   * @param {*} callbackFn 回调函数
   */
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }


  /**
   * 返回 hashmap 的字符串
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

export default HashMap
