Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let _gettext = require("./gettext");

/**
 * TODO: We need to add description here
 * @returns {object} JSON
 */
function buildTextdomain() {
  let translations =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let plural =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "n != 1";
  return {
    gettext: _gettext.gettext.bind(null, translations),
    ngettext: _gettext.ngettext.bind(null, translations, plural),
    xgettext: _gettext.xgettext.bind(null, translations),
    nxgettext: _gettext.nxgettext.bind(null, translations, plural)
  };
}

let _default = buildTextdomain;
exports.default = _default;
