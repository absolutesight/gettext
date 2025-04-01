"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _gettext = require("./gettext");
/**
 * TODO: We need to add description here
 * @param {object} translations JSON
 * @param {any} plural TODO: No idea obout type
 * @returns {object} JSON
 */
function buildTextDomain() {
  let translations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "n != 1";
  return {
    gettext: _gettext.gettext.bind(null, translations),
    ngettext: _gettext.ngettext.bind(null, translations, plural),
    xgettext: _gettext.xgettext.bind(null, translations),
    nxgettext: _gettext.nxgettext.bind(null, translations, plural)
  };
}
var _default = exports.default = buildTextDomain;