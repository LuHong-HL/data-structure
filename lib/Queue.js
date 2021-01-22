"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

/**
 * 栈
 */
var Queue = /*#__PURE__*/function () {
  function Queue() {
    (0, _classCallCheck2["default"])(this, Queue);
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  } // 向队列尾部添加一个（或多个）新的项


  (0, _createClass2["default"])(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    } // 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }

      var result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    } // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.lowestCount];
    } // 如果队列中不包含任何元素，返回 true，否则返回 false

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count - this.lowestCount === 0;
    } // 返回队列包含的元素个数，与数组的 length 属性类似

  }, {
    key: "size",
    value: function size() {
      return this.count - this.lowestCount;
    } // 清空队列中所有的元素

  }, {
    key: "clear",
    value: function clear() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    } // 返回字符串

  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var objString = "".concat(this.items[this.lowestCount]);

      for (var i = this.lowestCount + 1; i < this.count; i++) {
        var _context;

        objString = (0, _concat["default"])(_context = "".concat(objString, ",")).call(_context, this.items[i]);
      }

      return objString;
    }
  }]);
  return Queue;
}();

var _default = Queue;
exports["default"] = _default;