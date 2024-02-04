"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.gettext = gettext;
exports.ngettext = ngettext;
exports.nxgettext = nxgettext;
exports.xgettext = xgettext;
const DELIMITER = "\u0004"; // End of Transmission (EOT)

/**
 * TODO: We need to add description here
 * @param {any} catalog string or function
 * @returns {string} string or string from a function
 */
function getTranslations(catalog) {
  return typeof catalog === "function" ? catalog() : catalog;
}

/**
 * TODO: We need to add description here
 * @param {any} plural string or function
 * @param {any} n TODO: No idea what will pass in it
 * @returns {any} 0 if nothing
 */
function getPluralForm(plural, n) {
  // return 0 if n is not integer
  if (Number.isNaN(parseInt(n, 10))) {
    return 0;
  }

  // if pluralForm is function, use it to get plural form index
  if (typeof plural === "function") {
    return plural(n);
  }

  // if pluralForm is string and contains only "n", "0-9", " ", "!=?:%+-/*><&|()"
  // characters, then we can "eval" it to calculate plural form
  if (typeof plural === "string" && !plural.match(/[^n0-9 !=?:%+-/*><&|()]/i)) {
    /* eslint-disable no-new-func */
    const calcPlural = Function("n", `return ${plural}`);
    /* eslint-enable no-new-func */
    return +calcPlural(n);
  }
  return 0;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param {string} message Message
 * @returns {string} Message
 */
function gettext(catalog, message) {
  const messages = getTranslations(catalog);
  return Object.prototype.hasOwnProperty.call(messages, message) ? messages[message] : message;
}

/**
 * TODO: WE need to add description here
 * @param {string} catalog Catalog
 * @param {string} plurality Plurality
 * @param {string} singular Singular
 * @param {string} plural Plural
 * @param {number} n n
 * @returns {string} Message
 */
function ngettext(catalog, plurality, singular, plural, n) {
  const messages = getTranslations(catalog);
  const pluralIndex = getPluralForm(plurality, n);
  const defaultValue = n > 1 ? plural : singular;
  return Object.prototype.hasOwnProperty.call(messages, singular) && Array.isArray(messages[singular]) && messages[singular].length > pluralIndex && pluralIndex >= 0 ? messages[singular][pluralIndex] : defaultValue;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param {string} message Message
 * @param {string} context Context
 * @returns {string} Message
 */
function xgettext(catalog, message, context) {
  const messages = getTranslations(catalog);
  const key = context + DELIMITER + message;
  return Object.prototype.hasOwnProperty.call(messages, key) ? messages[key] : message;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param {string} plurality Plurality
 * @param {string} singular Singular
 * @param {string} plural Plural
 * @param {number} n n
 * @param {string} context Context
 * @returns {string} Message
 */
function nxgettext(catalog, plurality, singular, plural, n, context) {
  const messages = getTranslations(catalog);
  const pluralIndex = getPluralForm(plurality, n);
  const defaultValue = n > 1 ? plural : singular;
  const key = context + DELIMITER + singular;
  return Object.prototype.hasOwnProperty.call(messages, key) && Array.isArray(messages[key]) && messages[key].length > pluralIndex && pluralIndex >= 0 ? messages[key][pluralIndex] : defaultValue;
}
const allDomain = {
  gettext,
  ngettext,
  xgettext,
  nxgettext
};
var _default = exports.default = allDomain;