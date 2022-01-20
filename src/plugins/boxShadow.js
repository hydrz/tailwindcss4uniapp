import transformThemeValue from '../util/transformThemeValue'

let transformValue = transformThemeValue('boxShadow')

export default function () {
  return function ({ config, matchUtilities, addBase, addUtilities, theme, variants }) {

    matchUtilities(
      {
        shadow: (value) => {
          value = transformValue(value)
          return {
            'box-shadow': value === 'none' ? '0 0 #0000' : value,
          }
        },
      },
      {
        values: theme('boxShadow'),
        variants: variants('boxShadow'),
        type: 'lookup',
      }
    )
  }
}
