/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @public
 */
export interface DeepMergeInput {
  [key: string]: any;
}

/**
 * @public
 */
export type DeepMergeOutput<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// istanbul ignore next
const isObject = (obj: any) => {
  if (typeof obj === "object" && obj !== null) {
    if (typeof Object.getPrototypeOf === "function") {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }

    return Object.prototype.toString.call(obj) === "[object Object]";
  }

  return false;
};

/**
 * @public
 *
 * Deep merge objects
 * @param objects - objects to merge
 * @returns merged object
 */
export function deepmerge<T extends DeepMergeInput[]>(
  ...objects: T
): DeepMergeOutput<T[number]> {
  return objects.reduce((result, current) => {
    Object.keys(current).forEach((key) => {
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = Array.from(new Set(result[key].concat(current[key])));
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = deepmerge(result[key], current[key]);
      } else {
        result[key] = current[key];
      }
    });

    return result;
  }, {}) as any;
}
