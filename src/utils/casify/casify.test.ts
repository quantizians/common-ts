import { casify } from './casify';

describe('to camelCase', () => {
  const casing = 'camel';

  test('should trim both ends (white space, "_", and "-")', () => {
    expect(casify('  camelCaseWord  ', casing)).toBe('camelCaseWord');
    expect(casify('-_-camelCaseWord__', casing)).toBe('camelCaseWord');
    expect(casify('  camelCaseWord_-', casing)).toBe('camelCaseWord');
  });

  test('camelCase should stay the same', () => {
    expect(casify('camelCaseWord', casing)).toBe('camelCaseWord');
    expect(casify('-camelCaseWord', casing)).toBe('camelCaseWord');
    expect(casify('camelCaseWord-', casing)).toBe('camelCaseWord');
    expect(casify('-camelCaseWord-', casing)).toBe('camelCaseWord');
  });

  test('first character should be lowercase', () => {
    expect(casify('FirstCharacter', casing)).toBe('firstCharacter');
  });

  test('kebab-case should be transformed to camelCase', () => {
    expect(casify('kebab-case-word', casing)).toBe('kebabCaseWord');
  });

  test('snake_case should be transformed to camelCase', () => {
    expect(casify('snake_case_word', casing)).toBe('snakeCaseWord');
  });

  test('complex mix between casing should be transformed to camelCase', () => {
    expect(casify('snake_case-mix_with-kebabAnd-CamelCasePhrase', casing)).toBe('snakeCaseMixWithKebabAndCamelCasePhrase');
  });

  test('[...] should also be transformed to camelCase', () => {
    expect(casify('[]mix-[argOne]-pre[argTwo]post-a[]a-[]', casing)).toBe('mixArgOnePreArgTwoPostAA');
  });
});
