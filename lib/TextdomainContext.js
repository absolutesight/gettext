"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _buildTextDomain = _interopRequireDefault(require("./buildTextDomain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextDomainContext = /*#__PURE__*/_react.default.createContext((0, _buildTextDomain.default)({}, 'n != 1'));
var _default = exports.default = TextDomainContext;