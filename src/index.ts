export type ZeroType = 'number' | 'string' | 'object' | 'array_number' | 'array_string' | 'word';

export type GetZeroReturnType = number | string | object | Array<number> | Array<string> | [number];

export type GetZeroFunc = (as?: ZeroType) => GetZeroReturnType;

/**
 * Gets zero in any form you want.
 * @param {ZeroType} as The type of zero you want. Defaults to 'number'.
 * @returns {GetZeroReturnType} The zero in the form of as.
 * @example
 * getZero() // 0
 * getZero('string') // '0'
 * getZero('object') // { 0: 0 }
 * getZero('array_number') // [0]
 * getZero('array_string') // ['0']
 * getZero('word') // 'zero'
 */
const getZero: GetZeroFunc = (as = 'number'): ReturnType<GetZeroFunc> => {
  switch (as) {
    case 'number':
      return 0;

    case 'string':
      return '0';

    case 'object':
      return { 0: 0 };

    case 'array_number':
      return [0];

    case 'array_string':
      return ['0'];

    case 'word':
      return 'zero';

    default:
      return 0;
  }
};

export default getZero;
