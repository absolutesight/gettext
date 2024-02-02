Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let _react = _interopRequireDefault(require("react"));

let _hoistNonReactStatics = _interopRequireDefault(
  require("hoist-non-react-statics")
);

let _Textdomain2 = _interopRequireDefault(require("./Textdomain"));

/**
 * TODO: We need to add description here
 * @param {object} obj obj
 * @returns {object} obj
 */
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * TODO: We need to add description here
 * @param {object} obj obj
 * @returns {object} obj
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
 * TODO: We need to add description here
 * @param {any} instance Instance
 * @param {any} Constructor Constructor
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * TODO: We need to add description here
 * @param {any} target TODO: Don't know about type
 * @param {object} props props
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
 * TODO: We need to add description here
 * @param {object} Constructor Constructor
 * @param {string} protoProps protoProps
 * @param {any} staticProps TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
 */
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * TODO: We need to add description here
 * @param {any} subClass TODO: don't know the type
 * @param {any} superClass TODO: don't know the type
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
 * TODO: We need to add description here
 * @param {any} o TODO: Don't know the type
 * @param {any} p TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
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
 * TODO: We need to add description here
 * @param {any} Derived TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
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
 * TODO: We need to add description here
 * @param {any} self TODO: Don't know the type
 * @param {any} call TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
 */
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

/**
 * TODO: We need to add description here
 * @param {any} self TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
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
 * TODO: We need to add description here
 * @returns {boolean} True or False
 */
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

/* eslint-disable no-func-assign */
/**
 * TODO: We need to add description here
 * @param {any} o TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
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

let withGettext = function withGettext() {
  let translations =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let pluralForm =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "n != 1";
  let options =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function(WrappedComponent) {
    let args = Object.assign(
      {
        withRef: false
      },
      options
    );

    let WithGettext = /*#__PURE__*/ (function(_Textdomain) {
      _inherits(WithGettext, _Textdomain);

      let _super = _createSuper(WithGettext);

      /**
       * TODO: We need to add description here
       * @returns {any} TODO: Don't know the type
       */
      function WithGettext() {
        _classCallCheck(this, WithGettext);

        return _super.apply(this, arguments);
      }

      _createClass(WithGettext, [
        {
          key: "getWrappedComponent",
          value: function getWrappedComponent() {
            return this.refs.wrappedComponent;
          }
        },
        {
          key: "render",
          value: function render() {
            let newprops = Object.assign({}, this.props);

            if (args.withRef) {
              newprops.ref = "wrappedComponent";
            }

            return /*#__PURE__*/ _react.default.createElement(
              WrappedComponent,
              newprops
            );
          }
        }
      ]);

      return WithGettext;
    })(_Textdomain2.default);

    WithGettext.defaultProps = {
      translations: translations,
      plural: pluralForm
    };
    WithGettext.displayName = "withGettext(".concat(
      WrappedComponent.displayName || WrappedComponent.name || "Component",
      ")"
    );
    return (0, _hoistNonReactStatics.default)(WithGettext, WrappedComponent);
  };
};

let _default = withGettext;
exports.default = _default;
