"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Textdomain", {
  enumerable: true,
  get: function () {
    return _Textdomain.default;
  }
});
Object.defineProperty(exports, "TextdomainContext", {
  enumerable: true,
  get: function () {
    return _TextdomainContext.default;
  }
});
Object.defineProperty(exports, "buildTextdomain", {
  enumerable: true,
  get: function () {
    return _buildTextdomain.default;
  }
});
exports.default = void 0;
var _withGettext = _interopRequireDefault(require("./withGettext"));
var _Textdomain = _interopRequireDefault(require("./Textdomain"));
var _TextdomainContext = _interopRequireDefault(require("./TextdomainContext"));
var _buildTextdomain = _interopRequireDefault(require("./buildTextdomain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _withGettext.default;