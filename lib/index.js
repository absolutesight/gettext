"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TextDomain", {
  enumerable: true,
  get: function () {
    return _TextDomain.default;
  }
});
Object.defineProperty(exports, "TextDomainContext", {
  enumerable: true,
  get: function () {
    return _TextDomainContext.default;
  }
});
Object.defineProperty(exports, "buildTextDomain", {
  enumerable: true,
  get: function () {
    return _buildTextDomain.default;
  }
});
exports.default = void 0;
var _withGettext = _interopRequireDefault(require("./withGettext"));
var _TextDomain = _interopRequireDefault(require("./TextDomain"));
var _TextDomainContext = _interopRequireDefault(require("./TextDomainContext"));
var _buildTextDomain = _interopRequireDefault(require("./buildTextDomain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _withGettext.default;