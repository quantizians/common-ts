import type { Except } from '$src/utility/Except';

/**
 * @public
 */
export type Merge<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;
