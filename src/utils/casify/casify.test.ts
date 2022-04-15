import { casify} from './casify';

describe('to camelCase', () => {
  const casing = 'camel';
  test('should trim non-alphanumeric characters from both ends', () => {
    expect(casify('  camelCaseWord  ', { casing })).toEqual('camelCaseWord');
    expect(casify('-_-camelCaseWord__', { casing })).toEqual('camelCaseWord');
    expect(casify('  camelCaseWord_-', { casing })).toEqual('camelCaseWord');
  });

  test('non-alphanumeric characters should be removed', () => {
    expect(casify('contain space and special ! ch ? ar ~ + ac = ter', { casing })).toEqual('containSpaceAndSpecialChArAcTer');
  });

  test('same casing should stay the same', () => {
    expect(casify('camelCaseWord', { casing })).toEqual('camelCaseWord');
  });

  test('first character should be lowercase', () => {
    expect(casify('FirstCharacter', { casing })).toEqual('firstCharacter');
  });

  test('complex mix between casing should be transformed correctly', () => {
    expect(
      casify('snake_case-mix_with-kebabAnd-CamelCasePhrase',{ casing })
    ).toEqual('snakeCaseMixWithKebabAndCamelCasePhrase');
  });

  test('config: option ignoreCharacters should work', () => {
    const ignore = ['[', ']'];
    expect(casify('[dynamic_Arg]-camel_Case', { casing, ignore })).toEqual('[dynamicArg]CamelCase');
  });

  test('config: option allowNumber should work', () => {
    const word = 'camel- 0 case- 9';
    expect(casify(word, { casing })).toEqual('camel0Case9');
    const allowNumber = false;
    expect(
      casify(word, { casing, allowNumber })
    ).toEqual('camelCase');
  });

  test('other casing should be transformed to this casing', () => {
    expect(casify('kebab-case-word', { casing })).toEqual('kebabCaseWord');
    expect(casify('snake_case_word', { casing })).toEqual('snakeCaseWord');
  });
});

describe('to kebab-case',() => {
  const casing = 'kebab';

  test('should trim non-alphanumeric characters from both ends', () => {
    expect(casify('  kebab-case  ', { casing })).toEqual('kebab-case');
    expect(casify('-_-kebab-case__', { casing })).toEqual('kebab-case');
    expect(casify('  kebab-case_-', { casing })).toEqual('kebab-case');
  });

  test('non-alphanumeric characters should be removed', () => {
    expect(casify('contain space and special ! ch ? ar ~ + ac = ter', { casing })).toEqual('contain-space-and-special-ch-ar-ac-ter');
  });

  test('same casing should stay the same', () => {
    expect(casify('kebab-case', { casing })).toEqual('kebab-case');
  });

  test('first character should be lowercase', () => {
    expect(casify('Kebab-case', { casing })).toEqual('kebab-case');
  });

  test('complex mix between casing should be transformed correctly', () => {
    expect(
      casify('snake_case-mix_with-kebabAnd-CamelCasePhrase', { casing })
    ).toEqual('snake-case-mix-with-kebab-and-camel-case-phrase');
  });

  test('config: option ignoreCharacters should work', () => {
    const ignore = ['[', ']'];
    expect(
      casify('[dynamic_Arg]-snake_Case-camelCase', { casing, ignore })
    ).toEqual('[dynamic-arg]-snake-case-camel-case');
  });

  test('config: option allowNumber should work', () => {
    const word = '-kebab 0 case- 9';
    expect(casify(word, { casing })).toEqual('kebab-0-case-9');
    const allowNumber = false;
    expect(
      casify(word, { casing, allowNumber })
    ).toEqual('kebab-case');
  });

  test('other casing should be transformed to this casing', () => {
    expect(casify('camelCaseWord', { casing })).toEqual('camel-case-word');
    expect(casify('snake_case_word', { casing })).toEqual('snake-case-word');
  });
});

describe('to snake_case',() => {
  const casing = 'snake';

  test('should trim non-alphanumeric characters from both ends', () => {
    expect(casify('  snake_case  ', { casing })).toEqual('snake_case');
    expect(casify('-_-snake_case__', { casing })).toEqual('snake_case');
    expect(casify('  snake_case_-', { casing })).toEqual('snake_case');
  });

  test('non-alphanumeric characters should be removed', () => {
    expect(casify('contain space and special ! ch ? ar ~ + ac = ter', { casing })).toEqual('contain_space_and_special_ch_ar_ac_ter');
  });

  test('same casing should stay the same', () => {
    expect(casify('snake_case', { casing })).toEqual('snake_case');
  });

  test('first character should be lowercase', () => {
    expect(casify('Snake case', { casing })).toEqual('snake_case');
  });

  test('complex mix between casing should be transformed correctly', () => {
    expect(
      casify('snake_case-mix_with-kebabAnd-CamelCasePhrase', { casing })
    ).toEqual('snake_case_mix_with_kebab_and_camel_case_phrase');
  });

  test('config: option ignoreCharacters should work', () => {
    const ignore = ['[', ']'];
    expect(
      casify('[dynamic_Arg]-snake_Case-camelCase', { casing, ignore })
    ).toEqual('[dynamic_arg]_snake_case_camel_case');
  });

  test('config: option allowNumber should work', () => {
    const word = '-snake 0 case- 9';
    expect(casify(word, { casing })).toEqual('snake_0_case_9');
    const allowNumber = false;
    expect(
      casify(word, { casing, allowNumber })
    ).toEqual('snake_case');
  });

  test('other casing should be transformed to this casing', () => {
    expect(casify('camelCaseWord', { casing })).toEqual('camel_case_word');
    expect(casify('kebab-case-word', { casing })).toEqual('kebab_case_word');
  });
});
