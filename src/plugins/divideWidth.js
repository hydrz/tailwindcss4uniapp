export default function () {
  return function ({ matchUtilities, addUtilities, theme, variants, config }) {
    matchUtilities(
      {
        'divide-x': (value) => {
          value = value === '0' ? '0px' : value

          return {
            '&': {
              ...(config('mode') === 'jit' ? { '@defaults border-width': {} } : {}),
              'border-right-width': `${value}`,
              'border-left-width': `${value}`,
            },
          }
        },
        'divide-y': (value) => {
          value = value === '0' ? '0px' : value

          return {
            '&': {
              ...(config('mode') === 'jit' ? { '@defaults border-width': {} } : {}),
              'border-top-width': `${value}`,
              'border-bottom-width': `${value}`,
            },
          }
        },
      },
      {
        values: theme('divideWidth'),
        variants: variants('divideWidth'),
        type: 'length',
      }
    )
  }
}
