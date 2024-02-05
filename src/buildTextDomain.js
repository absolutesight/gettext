import { gettext, ngettext, nxgettext, xgettext } from "./gettext";

/**
 * TODO: We need to add description here
 * @param {object} translations JSON
 * @param {any} plural TODO: No idea obout type
 * @returns {object} JSON
 */
function buildTextDomain(translations = {}, plural = "n != 1") {
  return {
    gettext: gettext.bind(null, translations),
    ngettext: ngettext.bind(null, translations, plural),
    xgettext: xgettext.bind(null, translations),
    nxgettext: nxgettext.bind(null, translations, plural)
  };
}

export default buildTextDomain;
