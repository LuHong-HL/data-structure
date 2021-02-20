'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document = global$1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var path = {};

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global$1 : STATIC ? global$1[TARGET] : (global$1[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global$1);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global$1, key, value);
  } catch (error) {
    global$1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global$1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode:  'pure' ,
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace])
    : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global$1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var entryVirtual = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

var concat = entryVirtual('Array').concat;

var ArrayPrototype = Array.prototype;

var concat_1 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};

var concat$1 = concat_1;

var concat$2 = concat$1;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperty: objectDefineProperty.f
});

var defineProperty_1 = createCommonjsModule(function (module) {
var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;
});

var defineProperty = defineProperty_1;

var defineProperty$1 = defineProperty;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    defineProperty$1(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

/**
 * 栈
 */
var Stack = /*#__PURE__*/function () {
  function Stack() {
    classCallCheck(this, Stack);

    this.count = 0;
    this.items = {};
  }
  /**
   * 向栈添加元素
   * @param {*} element 元素
   */


  createClass(Stack, [{
    key: "push",
    value: function push(element) {
      this.items[this.count] = element;
      this.count++;
    }
    /**
     * 从栈移除元素
     */

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
    }
    /**
     * 查看栈顶元素
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.count - 1];
    }
    /**
     * 检查栈是否为空
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    }
    /**
     * 返回栈里的元素个数
     */

  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
    /**
     * 移除栈里的所有元素
     */

  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
      this.count = 0;
    }
    /**
     * 返回对象的字符串表示形式
     */

  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var objString = "".concat(this.items[0]);

      for (var i = 1; i < this.count; i++) {
        var _context;

        objString = concat$2(_context = "".concat(objString, ",")).call(_context, this.items[i]);
      }

      return objString;
    }
  }]);

  return Stack;
}();

/**
 * 队列
 */
var Queue = /*#__PURE__*/function () {
  function Queue() {
    classCallCheck(this, Queue);

    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  /**
   * 向队列尾部添加一个（或多个）新的项
   * @param {*} element 元素
   */


  createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    }
    /**
     * 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
     */

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
    }
    /**
     * 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.lowestCount];
    }
    /**
     * 如果队列中不包含任何元素，返回 true，否则返回 false
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count - this.lowestCount === 0;
    }
    /**
     * 返回队列包含的元素个数，与数组的 length 属性类似
     */

  }, {
    key: "size",
    value: function size() {
      return this.count - this.lowestCount;
    }
    /**
     * 清空队列中所有的元素
     */

  }, {
    key: "clear",
    value: function clear() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
    /**
     * 返回字符串
     */

  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var objString = "".concat(this.items[this.lowestCount]);

      for (var i = this.lowestCount + 1; i < this.count; i++) {
        var _context;

        objString = concat$2(_context = "".concat(objString, ",")).call(_context, this.items[i]);
      }

      return objString;
    }
  }]);

  return Queue;
}();

/**
 * 双端队列
 */
var Deque = /*#__PURE__*/function () {
  function Deque() {
    classCallCheck(this, Deque);

    this.count = 0; // 控制队列的大小

    this.lowestCount = 0; // 记录队列第一个元素位置

    this.items = {}; // 存储元素对象
  }
  /**
   * 在双端队列前添加新的元素
   * @param {*} element 元素
   */


  createClass(Deque, [{
    key: "addFront",
    value: function addFront(element) {
      if (this.isEmpty()) {
        this.addBack(element);
      } else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
      } else {
        for (var i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }

        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
      }
    }
    /**
     * 在双端队列后端添加新元素
     * @param {*} element 元素
     */

  }, {
    key: "addBack",
    value: function addBack(element) {
      this.items[this.count] = element;
      this.count++;
    }
    /**
     * 在双端队列前端移除第一个元素
     */

  }, {
    key: "removeFront",
    value: function removeFront() {
      if (this.isEmpty()) {
        return undefined;
      }

      var result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
    /**
     * 在双端队列后端移除第一个元素
     */

  }, {
    key: "removeBack",
    value: function removeBack() {
      if (this.isEmpty()) {
        return undefined;
      }

      this.count--;
      var result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
    /**
     * 返回双端队列前端的一个元素
     */

  }, {
    key: "peekFront",
    value: function peekFront() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.lowestCount];
    }
    /**
     * 返回双端队列后端的第一个元素
     */

  }, {
    key: "peekBack",
    value: function peekBack() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.count - 1];
    }
    /**
       * 如果队列中不包含任何元素，返回 true，否则返回 false
       */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count - this.lowestCount === 0;
    }
    /**
       * 返回队列包含的元素个数，与数组的 length 属性类似
       */

  }, {
    key: "size",
    value: function size() {
      return this.count - this.lowestCount;
    }
    /**
       * 清空队列中所有的元素
       */

  }, {
    key: "clear",
    value: function clear() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
    /**
       * 返回字符串
       */

  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var objString = "".concat(this.items[this.lowestCount]);

      for (var i = this.lowestCount + 1; i < this.count; i++) {
        var _context;

        objString = concat$2(_context = "".concat(objString, ",")).call(_context, this.items[i]);
      }

      return objString;
    }
  }]);

  return Deque;
}();

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var defineProperty$2 = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty$2(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $indexOf = arrayIncludes.indexOf;



var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var indexOf = entryVirtual('Array').indexOf;

var ArrayPrototype$1 = Array.prototype;

var indexOf_1 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.indexOf) ? indexOf : own;
};

var indexOf$1 = indexOf_1;

var indexOf$2 = indexOf$1;

function defaultEquals(a, b) {
  return a === b;
}

/**
 * 节点结构
 */
var Node = function Node(element) {
  classCallCheck(this, Node);

  this.element = element;
  this.next = undefined;
};

/**
 * 链表类
 */

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEquals;

    classCallCheck(this, LinkedList);

    this.count = 0; // 链表中元素数量

    this.head = undefined; // 保存第一个元素的引用

    this.equalsFn = equalsFn; // 比较链表中的函数是否相等的函数 默认 defaultEquals
  }
  /**
   * 向链表尾部添加一个新元素
   * @param {*} element 元素
   */


  createClass(LinkedList, [{
    key: "push",
    value: function push(element) {
      var node = new Node(element);
      var current;

      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next != null) {
          current = current.next;
        }

        current.next = node;
      }

      this.count++;
    }
    /**
     * 向链表的特定位置插入一个新元素
     * @param {*} element 元素
     * @param {*} index 插入元素的位置
     */

  }, {
    key: "insert",
    value: function insert(element, index) {
      if (index >= 0 && index <= this.count) {
        // 检查是否越界
        var node = new Node(element);

        if (index === 0) {
          // 第一个位置
          var current = this.head;
          node.next = current;
          this.head = node;
        } else {
          var previous = this.getElementAt(index - 1);
          var _current = previous.next;
          node.next = _current;
          previous.next = node;
        }

        this.count++;
        return true;
      }

      return false;
    }
    /**
     * 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
     * @param {*} index 元素的位置
     */

  }, {
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index >= 0 && index <= this.count) {
        var node = this.head;

        for (var i = 0; i < index && node != null; i++) {
          node = node.next;
        }

        return node;
      }

      return undefined;
    }
    /**
     * 从链表中移除一个元素
     * @param {*} element 元素
     */

  }, {
    key: "remove",
    value: function remove(element) {
      var _context;

      var index = indexOf$2(_context = this).call(_context, element);

      return this.removeAt(index);
    }
    /**
     * 返回元素在链表中的索引。如果链表中没有改元素则返回 -1
     * @param {*} element 元素
     */

  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var current = this.head;

      for (var i = 0; i < this.count && current != null; i++) {
        if (this.equalsFn(element, current.element)) {
          return i;
        }

        current = current.next;
      }

      return -1;
    }
    /**
     * 从链表的特定位置移除一个元素
     * @param {*} index 元素的位置
     */

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index >= 0 && index < this.count) {
        // 检查越界值
        var current = this.head;

        if (index === 0) {
          // 移除第一项
          this.head = current.next;
        } else {
          var previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next; // 将previous 与 current 的下一项链接起来：跳过 current,从而移除它
        }

        this.count--;
        return current.element;
      }

      return undefined;
    }
    /**
     * 判断链表是否为空
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
    /**
     * 返回链表包含的元素个数
     */

  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
    /**
     * 获取链表的头节点
     */

  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }
    /**
     * 返回表示整个链表的字符串
     */

  }, {
    key: "toString",
    value: function toString() {
      if (this.head == null) {
        return '';
      }

      var objString = "".concat(this.head.element);
      var current = this.head.next;

      for (var i = 1; i < this.size() && current != null; i++) {
        var _context2;

        objString = concat$2(_context2 = "".concat(objString, ",")).call(_context2, current.element);
        current = current.next;
      }

      return objString;
    }
  }]);

  return LinkedList;
}();

exports.Deque = Deque;
exports.LinkedList = LinkedList;
exports.Queue = Queue;
exports.Stack = Stack;
