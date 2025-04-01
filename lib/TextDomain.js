"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _gettext = require("./gettext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TextDomain extends _react.Component {
  getChildContext() {
    const self = this;
    return {
      gettext: self.gettext.bind(self),
      xgettext: self.xgettext.bind(self),
      ngettext: self.ngettext.bind(self),
      nxgettext: self.nxgettext.bind(self)
    };
  }
  gettext(message) {
    const {
      translations
    } = this.props;
    return (0, _gettext.gettext)(translations, message);
  }
  ngettext(singular, plural, n) {
    const {
      translations,
      plural: plurality
    } = this.props;
    return (0, _gettext.ngettext)(translations, plurality, singular, plural, n);
  }
  xgettext(message, context) {
    const {
      translations
    } = this.props;
    return (0, _gettext.xgettext)(translations, message, context);
  }
  nxgettext(singular, plural, n, context) {
    const {
      translations,
      plural: plurality
    } = this.props;
    return (0, _gettext.nxgettext)(translations, plurality, singular, plural, n, context);
  }
  render() {
    const {
      children
    } = this.props;
    return children;
  }
}
TextDomain.propTypes = {
  translations: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]))]),
  plural: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)])
};
TextDomain.defaultProps = {
  translations: {},
  plural: 'n != 1',
  children: []
};
TextDomain.childContextTypes = {
  gettext: _propTypes.default.func,
  ngettext: _propTypes.default.func,
  xgettext: _propTypes.default.func,
  nxgettext: _propTypes.default.func
};
var _default = exports.default = TextDomain;