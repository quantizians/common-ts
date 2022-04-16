/**
 * @public
 */
export type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends Record<string, unknown>|undefined ? RecursivePartial<T[P]> :
    T[P];
};
