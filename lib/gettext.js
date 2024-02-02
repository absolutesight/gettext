Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gettext = gettext;
exports.ngettext = ngettext;
exports.xgettext = xgettext;
exports.nxgettext = nxgettext;
exports.default = void 0;
let DELIMITER = "\x04"; // End of Transmission (EOT)

/**
 * TODO: We need to add description here
 * @param {any} catalog TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
 */
function getTranslations(catalog) {
  return typeof catalog === "function" ? catalog() : catalog;
}

/**
 * TODO: We need to add description here
 * @param {any} plural TODO: Don't know the type
 * @param {any} n TODO: Don't know the type
 * @returns {any} TODO: Don't know the type
 */
function getPluralForm(plural, n) {
  // return 0 if n is not integer
  if (Number.isNaN(parseInt(n, 10))) {
    return 0;
  } // if pluralForm is function, use it to get plural form index

  if (typeof plural === "function") {
    return plural(n);
  } // if pluralForm is string and contains only "n", "0-9", " ", "!=?:%+-/*><&|()"
  // characters, then we can "eval" it to calculate plural form

  if (typeof plural === "string" && !plural.match(/[^n0-9 !=?:%+-/*><&|()]/i)) {
    /* eslint-disable no-new-func */
    let calcPlural = Function("n", "return ".concat(plural));
    /* eslint-enable no-new-func */

    return +calcPlural(n);
  }

  return 0;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param {string} message Message
 */
function gettext(catalog, message) {
  let messages = getTranslations(catalog);
  return Object.prototype.hasOwnProperty.call(messages, message)
    ? messages[message]
    : message;
}

/**
 * TODO: We need to add description here
 * @param {any} catalog Catelog
 * @param {any} plurality TODO: Don't know the type
 * @param {any} singular TODO: Don't know the type
 * @param {any} plural TODO: Don't know the type
 * @param {any} n TODO: Don't know the type
 * @returns {string} Message
 */
function ngettext(catalog, plurality, singular, plural, n) {
  let messages = getTranslations(catalog);
  let pluralIndex = getPluralForm(plurality, n);
  let defaultValue = n > 1 ? plural : singular;
  return Object.prototype.hasOwnProperty.call(messages, singular) &&
  Array.isArray(messages[singular]) &&
  messages[singular].length > pluralIndex &&
  pluralIndex >= 0
    ? messages[singular][pluralIndex]
    : defaultValue;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param {string} message Message
 * @param {string }context Context
 * @returns {string} Message
 */
function xgettext(catalog, message, context) {
  let messages = getTranslations(catalog);
  let key = context + DELIMITER + message;
  return Object.prototype.hasOwnProperty.call(messages, key)
    ? messages[key]
    : message;
}

/**
 * TODO: We need to add description here
 * @param {string} catalog Catalog
 * @param plurality TODO: Don't know the type
 * @param {string} singular Singular
 * @param plural TODO: Don't know the type
 * @param n TODO: Don't know the type
 * @param {string} context Context
 * @returns {string} Message
 */
function nxgettext(catalog, plurality, singular, plural, n, context) {
  let messages = getTranslations(catalog);
  let pluralIndex = getPluralForm(plurality, n);
  let defaultValue = n > 1 ? plural : singular;
  let key = context + DELIMITER + singular;
  return Object.prototype.hasOwnProperty.call(messages, key) &&
  Array.isArray(messages[key]) &&
  messages[key].length > pluralIndex &&
  pluralIndex >= 0
    ? messages[key][pluralIndex]
    : defaultValue;
}

let _default = {
  gettext: gettext,
  ngettext: ngettext,
  xgettext: xgettext,
  nxgettext: nxgettext
};
exports.default = _default;
