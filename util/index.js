/**
 * 判断两个元素是否相等的默认方式
 * @param {*} a 元素 a
 * @param {*} b 元素 b
 */
export function defaultEquals(a, b) {
  return a === b
}

/**
 * 把相应的项转成字符串
 * @param {*} item 需要转成字符串的项
 */
export function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString() // 如果是对象 则返回 [object Object] 如果是数组 则返回 ""
}
