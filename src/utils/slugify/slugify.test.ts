import { slugify } from './slugify';

test('empty strings return empty', () => {
  expect(slugify('')).toBe('');
});
test('white space should be trimmed', () => {
  expect(slugify('   foo bar    ')).toBe('foo-bar');
});

test('leading & trailing hyphen (\'-\') should be trimmed', () => {
  expect(slugify('---foo-bar---')).toBe('foo-bar');
});

test('non-alphanumeric character should be replaced by hyphen', () => {
  expect(
    slugify('A decorated & complex "foo, bar" title!?')
  ).toBe('a-decorated-complex-foo-bar-title');
});

test('multiple consecutive hyphen should be squashed to only one', () => {
  expect(slugify('foo---bar')).toBe('foo-bar');
});
