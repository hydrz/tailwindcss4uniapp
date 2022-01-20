import createUtilityPlugin from '../util/createUtilityPlugin';

export default function () {
  return createUtilityPlugin('margin', [
    ['m', ['margin-top', 'margin-right', 'margin-bottom', 'margin-left']],
    [
      ['mx', ['margin-left', 'margin-right']],
      ['my', ['margin-top', 'margin-bottom']],
    ],
    [
      ['mt', ['margin-top']],
      ['mr', ['margin-right']],
      ['mb', ['margin-bottom']],
      ['ml', ['margin-left']],
    ],
  ]);
}
