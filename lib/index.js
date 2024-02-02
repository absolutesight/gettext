Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Textdomain", {
  enumerable: true,
  get: function get() {
    return _Textdomain.default;
  }
});
Object.defineProperty(exports, "TextdomainContext", {
  enumerable: true,
  get: function get() {
    return _TextdomainContext.default;
  }
});
Object.defineProperty(exports, "buildTextdomain", {
  enumerable: true,
  get: function get() {
    return _buildTextdomain.default;
  }
});
exports.default = void 0;

let _withGettext = _interopRequireDefault(require("./withGettext"));

let _Textdomain = _interopRequireDefault(require("./Textdomain"));

let _TextdomainContext = _interopRequireDefault(require("./TextdomainContext"));

let _buildTextdomain = _interopRequireDefault(require("./buildTextdomain"));

/**
 * TODO: We need to add description here
 * @param {object} obj obj
 * @returns {object} obj
 */
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

let _default = _withGettext.default;
exports.default = _default;
