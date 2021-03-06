import createUtilityPlugin from '../util/createUtilityPlugin';

export default function () {
  return createUtilityPlugin('padding', [
    ['p', ['padding-top', 'padding-right', 'padding-bottom', 'padding-left']],
    [
      ['px', ['padding-left', 'padding-right']],
      ['py', ['padding-top', 'padding-bottom']],
    ],
    [
      ['pt', ['padding-top']],
      ['pr', ['padding-right']],
      ['pb', ['padding-bottom']],
      ['pl', ['padding-left']],
    ],
  ]);
}
