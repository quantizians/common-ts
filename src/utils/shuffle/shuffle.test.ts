import { shuffle } from './shuffle';

test('empty array should return remains empty', () => {
  expect(shuffle([]).length).toBe(0);
});

test('array should be shuffled', () => {
  const array = [1, 2, 3, 4, 5];
  const shuffled = shuffle(array);
  expect(shuffled.length).toEqual(array.length);
  expect(shuffled).not.toEqual(array);

  let diff = 0;
  for (const i in array) {
    diff += array[i] - shuffled[i];
    // at least one element should be shuffled
    if (diff !== 0) break;
  }
  expect(diff !== 0).toBe(true);
});
