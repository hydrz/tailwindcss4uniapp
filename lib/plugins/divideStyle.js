"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return function ({
    addUtilities,
    variants
  }) {
    addUtilities({
      '.divide-solid': {
        'border-style': 'solid'
      },
      '.divide-dashed': {
        'border-style': 'dashed'
      },
      '.divide-dotted': {
        'border-style': 'dotted'
      } // '.divide-double': {
      //   'border-style': 'double',
      // },
      // '.divide-none': {
      //   'border-style': 'none',
      // },

    }, variants('divideStyle'));
  };
}