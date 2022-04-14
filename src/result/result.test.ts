import {
  ok,
  isOk,
  err,
  isErr
} from './result';

test('ok: isOk', () => {
  const value = 'foo';
  const result = ok(value);
  expect(result.unwrap()).toBe(value);
  expect(isOk(result)).toBe(true);
  expect(isErr(result)).toBe(false);
});

test('ok: isOk', () => {
  const error = new Error('test error');
  const result = err(error);
  expect(() => result.unwrap()).toThrow(error);
  expect(isErr(result)).toBe(true);
  expect(isOk(result)).toBe(false);
});
