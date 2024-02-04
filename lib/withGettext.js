"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));
var _Textdomain = _interopRequireDefault(require("./Textdomain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const withGettext = function () {
  let translations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let pluralForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'n != 1';
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return WrappedComponent => {
    const args = Object.assign({
      withRef: false
    }, options);
    class WithGettext extends _Textdomain.default {
      getWrappedComponent() {
        return this.refs.wrappedComponent;
      }
      render() {
        const newprops = Object.assign({}, this.props);
        if (args.withRef) {
          newprops.ref = 'wrappedComponent';
        }
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, newprops);
      }
    }
    WithGettext.defaultProps = {
      translations,
      plural: pluralForm
    };
    WithGettext.displayName = `withGettext(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return (0, _hoistNonReactStatics.default)(WithGettext, WrappedComponent);
  };
};
var _default = exports.default = withGettext;