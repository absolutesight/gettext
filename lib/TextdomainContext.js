Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let _react = _interopRequireDefault(require("react"));

let _buildTextdomain = _interopRequireDefault(require("./buildTextdomain"));

/**
 *
 * @param obj
 */
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

let TextdomainContext = /*#__PURE__*/ _react.default.createContext(
  (0, _buildTextdomain.default)({}, "n != 1")
);

let _default = TextdomainContext;
exports.default = _default;
