"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _transformThemeValue = _interopRequireDefault(require("../util/transformThemeValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let transformValue = (0, _transformThemeValue.default)('boxShadow');

function _default() {
  return function ({
    config,
    matchUtilities,
    addBase,
    addUtilities,
    theme,
    variants
  }) {
    matchUtilities({
      shadow: value => {
        value = transformValue(value);
        return {
          'box-shadow': value === 'none' ? '0 0 #0000' : value
        };
      }
    }, {
      values: theme('boxShadow'),
      variants: variants('boxShadow'),
      type: 'lookup'
    });
  };
}