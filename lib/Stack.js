"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

/**
 * 栈
 */
var Stack = /*#__PURE__*/function () {
  function Stack() {
    (0, _classCallCheck2.default)(this, Stack);
    this.count = 0;
    this.items = {};
  } // 向栈添加元素


  (0, _createClass2.default)(Stack, [{
    key: "push",
    value: function push(element) {
      this.items[this.count] = element;
      this.count++;
    } // 从栈移除元素

  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return undefined;
      }

      this.count--;
      var result = this.items[this.count];
      delete this.items[this.count];
      return result;
    } // 查看栈顶元素

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.count - 1];
    } // 检查栈是否为空

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    } // 返回栈里的元素个数

  }, {
    key: "size",
    value: function size() {
      return this.count;
    } // 返回对象的字符串表示形式

  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var objString = "".concat(this.items[0]);

      for (var i = 1; i < this.count; i++) {
        var _context;

        objString = (0, _concat.default)(_context = "".concat(objString, ",")).call(_context, this.items[i]);
      }

      return objString;
    }
  }]);
  return Stack;
}();

var _default = Stack;
exports.default = _default;