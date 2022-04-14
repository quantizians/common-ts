import { deepmerge } from './deepmerge';

test('two objects should be deeply merged', () => {
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
      f: 5
    },
  };
  const obj2 = {
    a: 2,
    b: {
      c: 3,
      d: {
        e: 4,
      },
      g: 6,
    },
  };
  const merged = deepmerge(obj1, obj2);
  expect(merged).toEqual({
    a: 2,
    b: {
      c: 3,
      d: {
        e: 4,
      },
      f: 5,
      g: 6
    },
  });
});

test('three objects should be deeply merged', () => {
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };
  const obj2 = {
    a: 2,
    b: {
      c: 3,
      e: 4
    },
  };
  const obj3 = {
    a: 3,
    b: {
      c: 4,
      d: {
        e: 5,
      },
      f: 6,
    },
  };
  const merged = deepmerge(obj1, obj2, obj3);
  expect(merged).toEqual({
    a: 3,
    b: {
      c: 4,
      e: 4,
      d: {
        e: 5,
      },
      f: 6
    },
  });
});

test('objects with arrays should be concatenated', () => {
  const obj1 = {
    a: [1, 2, 3],
  };
  const obj2 = {
    a: [4, 5],
  };
  const merged = deepmerge(obj1, obj2);
  expect(merged).toEqual({
    a: [1, 2, 3, 4, 5],
  });
});

test('objects methods should be replaced', () => {
  const method1 = () => null;
  const method2 = () => null;
  const obj1 = {
    method: method1,
  };
  const obj2 = {
    method: method2,
  };
  const merged = deepmerge(obj1, obj2);
  expect(merged.method).toEqual(method2);
});
