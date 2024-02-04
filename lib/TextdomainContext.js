"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _buildTextdomain = _interopRequireDefault(require("./buildTextdomain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextdomainContext = /*#__PURE__*/_react.default.createContext((0, _buildTextdomain.default)({}, 'n != 1'));
var _default = exports.default = TextdomainContext;