import getZero from '../index';

test('getZero', () => {
  expect(getZero()).toBe(0);
  expect(getZero('number')).toBe(0);
  expect(getZero('string')).toBe('0');
  expect(getZero('object')).toEqual({ 0: 0 });
  expect(getZero('array_number')).toEqual([0]);
  expect(getZero('array_string')).toEqual(['0']);
  expect(getZero('word')).toBe('zero');
});
