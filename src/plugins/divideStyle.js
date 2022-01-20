export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.divide-solid': {
          'border-style': 'solid',
        },
        '.divide-dashed': {
          'border-style': 'dashed',
        },
        '.divide-dotted': {
          'border-style': 'dotted',
        },
        // '.divide-double': {
        //   'border-style': 'double',
        // },
        // '.divide-none': {
        //   'border-style': 'none',
        // },
      },
      variants('divideStyle')
    )
  }
}
