# common-data-structure

Help you more convenient to use some common JavaScript data structure

## Table of Contents

- [Installing](#installing)
- [Example](#example)
- [Require](#require)
- [API](#api)
  + [Queue](#queue)
  + [Deque](#deque)
  + [Stack](#stack)
  + [LinkedList](#linkedlist)
  + [DoublyLinkedList](#doublylinkedlist)
  + [Set](#set)
  + [HashMap](#hashmap)

## Installing

``` javascript
npm install --save common-data-structure
```

## Example

``` javascript
const { Stack } = require('common-data-structure')

const stack = new Stack() // create an instance
stack.push(5) // add an element
stack.push(6)
stack.peek() // peek top of stack element
stack.push(8)
stack.isEmpty() // Is the stack empty
stack.size() // stack length
```

## Require

``` javascript
// import your required classes
const {
  Queue,
  Deque,
  Stack,
  LinkedList,
  DoublyLinkedList,
  Set,
  HashMap
} = require('common-data-structure')
```

## API

#### Queue

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| enqueue(element) | element: 元素 | 向队列尾部添加一个（或多个）新的项 |
| dequeue() |  | 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素 |
| peek() |  | 返回队列中第一个元素——最先被添加，也将是最先被移除的元素 |
| isEmpty() |  | 如果队列中不包含任何元素，返回 true，否则返回 false |
| size() |  | 返回队列包含的元素个数，与数组的 length 属性类似 |
| clear() |  | 清空队列中所有的元素 |
| toString() |  | 返回字符串 |

#### Deque

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| addFront(element) | element: 元素 | 在双端队列前添加新的元素 |
| addBack(element) | element: 元素 | 在双端队列后端添加新元素 |
| removeFront() |  | 在双端队列前端移除第一个元素 |
| removeBack() |  | 在双端队列后端移除第一个元素 |
| peekFront() |  | 返回双端队列前端的一个元素 |
| peekBack() |  | 返回双端队列后端的第一个元素 |
| isEmpty() |  | 如果队列中不包含任何元素，返回 true，否则返回 false |
| size() | | 返回队列包含的元素个数，与数组的 length 属性类似 |
| clear() | | 清空队列中所有的元素 |
| toString() | | 返回字符串 |

####  Stack

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| push(element) | element: 元素 | 向栈添加元素 |
| pop() |  | 从栈移除元素 |
| peek() |  | 查看栈顶元素 |
| isEmpty() |  | 检查栈是否为空 |
| size() |  | 移除栈里的所有元素 |
| toString() |  | 返回对象的字符串表示形式 |

#### LinkedList

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| push(element) | element: 元素 | 向链表尾部添加一个新元素 |
| insert(element) | element: 元素; index: 插入元素的位置 | 向链表的特定位置插入一个新元素 |
| getElementAt(index) | index: 元素的位置 | 在双端队列前端移除第一个元素 |
| removeBack(index) | index: 元素的位置 | 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined |
| remove(element) | element: 元素 | 从链表中移除一个元素 |
| indexOf(element) | element: 元素 | 返回元素在链表中的索引。如果链表中没有改元素则返回 -1 |
| removeAt(index) | index: 元素的位置 | 从链表的特定位置移除一个元素 |
| isEmpty() | | 判断链表是否为空 |
| getHead() | | 获取链表的头节点 |
| toString() | | 返回表示整个链表的字符串 |

#### DoublyLinkedList

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| push(element) | element: 元素 | 向链表尾部添加一个新元素 |
| insert(element) | element: 元素; index: 插入元素的位置 | 向链表的特定位置插入一个新元素 |
| getElementAt(index) | index: 元素的位置 | 在双端队列前端移除第一个元素 |
| removeBack(index) | index: 元素的位置 | 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined |
| remove(element) | element: 元素 | 从链表中移除一个元素 |
| indexOf(element) | element: 元素 | 返回元素在链表中的索引。如果链表中没有改元素则返回 -1 |
| removeAt(index) | index: 元素的位置 | 从链表的特定位置移除一个元素 |
| isEmpty() | | 判断链表是否为空 |
| getHead() | | 获取链表的头节点 |
| toString() | | 返回表示整个链表的字符串 |

#### Set

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| add(element) | element: 元素 | 向集合添加一个新元素 |
| delete(element) | element: 元素 | 从集合中移除一个元素 |
| has(element) | element: 元素 | 判断元素是否在集合中，存在则返回true,否则返回false |
| clear() | | 移除集合中的所有元素 |
| size() | | 返回集合所包含元素的数量 |
| values() | | 返回一个包含集合中所有元素的数组 |

#### HashMap

| 方法名称 | 参数 | 描述 |
| --- | --- | --- |
| set(key, value) | key: 键; value: 值 | 向散列表增加一个新的项 |
| delete(key) | key: 键 | 根据键值移除值 |
| get(key) | key: 键 | 根据键值返回特定的值 |
| hasKey() | key: 键 | 判断某键值是否存在散列表中 |
| clear() | | 删除字典中所有值 |
| size() | | 返回字典包含的数量 |
| isEmpty() | | 字典是否为空 |
| keys() | | 将字典所包含的所有键名以数组形式返回 |
| values() | | 将字典所包含的所有数值以数组形式返回 |
| keyValues() | | 将字典中所有[{键，值}]对返回 |
| forEach() | | 迭代字典中所有的键值对 |
| toString() | | 返回 hashmap 的字符串 |

