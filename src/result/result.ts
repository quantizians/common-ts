/** @public */
export type Ok<Value> = { value:Value; __ok: true; unwrap: () => Value; };
/**
 * Construct an Ok
 * @public
 */
export function ok<Value>(value: Value): Ok<Value> {
  return {
    value,
    __ok: true,
    unwrap: () => {
      return value;
    },
  };
}
/**
 * Check if a Result is of variant Ok
 * @public
 */
export function isOk<Value, Error>(result: Result<Error, Value>): result is Ok<Value> {
  return result.__ok === true;
}

/**
 * @public
 */
export type Err<Error> = { err: Error; __ok: false; unwrap: () => never; };
/**
 * Construct an Err
 * @public
 */
export function err<Error>(err: Error): Err<Error> {
  return {
    err,
    __ok: false,
    unwrap: () => {
      throw err;
    },
  };
}
/**
 * Check if a Result is of variant Err
 * @public
 */
export function isErr<Value, Error>(
  result: Result<Error, Value>
): result is Err<Error> {
  return !!result && "__ok" in result && result.__ok === false;
}

/**
 * @public
 *
 * @example
 * Example Usage:
 *
 * ```typescript
 * async function fetchData(): Promise<Result<Error, { message: string}>> {
 *   try {
 *     const response = await fetch('/message');
 *     const data = await response.json();
 *     if (typeof data.message !== 'string') {
 *       return err(new Error('CONTRACT_ERROR'))
 *     }
 *     return ok({ message: data.message })
 *   } catch (error: unknown) {
 *     return err(new Error('HTTP_ERROR'))
 *   }
 * }
 *
 * const data = await fetchData();
 * if (isOk(data)) {
 *   console.log(data.value)
 * } else {
 *   if (data.err.name === 'CONTRACT_ERROR') {
 *     console.error('Hey, AP!')
 *   } else {
 *     console.warn('It is what is is')
 *   }
 * }
 * ```
 */
export type Result<Error, Value> = Ok<Value> | Err<Error>;
