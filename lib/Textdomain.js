Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let _react = require("react");

let _propTypes = _interopRequireDefault(require("prop-types"));

let _gettext2 = require("./gettext");

/**
 *
 * @param obj
 */
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 *
 * @param obj
 */
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    /* eslint-disable no-func-assign */
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
    /* eslint-enable no-func-assign */
  } else {
    /* eslint-disable no-func-assign */
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
    /* eslint-enable no-func-assign */
  }
  return _typeof(obj);
}

/**
 *
 * @param instance
 * @param Constructor
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 *
 * @param target
 * @param props
 */
function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    let descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

/**
 *
 * @param Constructor
 * @param protoProps
 * @param staticProps
 */
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 *
 * @param subClass
 * @param superClass
 */
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/* eslint-disable no-func-assign */
/**
 *
 * @param o
 * @param p
 */
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}
/* eslint-enable no-func-assign */

/**
 *
 * @param Derived
 */
function _createSuper(Derived) {
  let hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    let Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      let NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

/**
 *
 * @param self
 * @param call
 */
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

/**
 *
 * @param self
 */
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

/**
 *
 */
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

/* eslint-disable no-func-assign */
/**
 *
 * @param o
 */
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
/* eslint-enable no-func-assign */

let Textdomain = /*#__PURE__*/ (function(_Component) {
  _inherits(Textdomain, _Component);

  let _super = _createSuper(Textdomain);

  /**
   *
   */
  function Textdomain() {
    _classCallCheck(this, Textdomain);

    return _super.apply(this, arguments);
  }

  _createClass(Textdomain, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        let self = this;
        return {
          gettext: self.gettext.bind(self),
          xgettext: self.xgettext.bind(self),
          ngettext: self.ngettext.bind(self),
          nxgettext: self.nxgettext.bind(self)
        };
      }
    },
    {
      key: "gettext",
      value: function gettext(message) {
        let translations = this.props.translations;
        return (0, _gettext2.gettext)(translations, message);
      }
    },
    {
      key: "ngettext",
      value: function ngettext(singular, plural, n) {
        let _this$props = this.props,
          translations = _this$props.translations,
          plurality = _this$props.plural;
        return (0, _gettext2.ngettext)(
          translations,
          plurality,
          singular,
          plural,
          n
        );
      }
    },
    {
      key: "xgettext",
      value: function xgettext(message, context) {
        let translations = this.props.translations;
        return (0, _gettext2.xgettext)(translations, message, context);
      }
    },
    {
      key: "nxgettext",
      value: function nxgettext(singular, plural, n, context) {
        let _this$props2 = this.props,
          translations = _this$props2.translations,
          plurality = _this$props2.plural;
        return (0, _gettext2.nxgettext)(
          translations,
          plurality,
          singular,
          plural,
          n,
          context
        );
      }
    },
    {
      key: "render",
      value: function render() {
        let children = this.props.children;
        return children;
      }
    }
  ]);

  return Textdomain;
})(_react.Component);

Textdomain.propTypes = {
  translations: _propTypes.default.oneOfType([
    _propTypes.default.func,
    _propTypes.default.objectOf(
      _propTypes.default.oneOfType([
        _propTypes.default.string,
        _propTypes.default.arrayOf(_propTypes.default.string)
      ])
    )
  ]),
  plural: _propTypes.default.oneOfType([
    _propTypes.default.func,
    _propTypes.default.string
  ]),
  children: _propTypes.default.oneOfType([
    _propTypes.default.node,
    _propTypes.default.arrayOf(_propTypes.default.node)
  ])
};
Textdomain.defaultProps = {
  translations: {},
  plural: "n != 1",
  children: []
};
Textdomain.childContextTypes = {
  gettext: _propTypes.default.func,
  ngettext: _propTypes.default.func,
  xgettext: _propTypes.default.func,
  nxgettext: _propTypes.default.func
};
let _default = Textdomain;
exports.default = _default;
