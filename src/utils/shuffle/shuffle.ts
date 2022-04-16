/**
 * Randomly shuffle an array using Fisher-Yates (aka Knuth) algorithm.
 * @public
 *
 * @remarks
 * Original Post {@link https://stackoverflow.com/a/2450976/1293256}
 *
 * @param array - The array to shuffle
 * @returns A shuffled copy of original array
 */
export function shuffle<T>(array: Array<T>): Array<T> {
  const shuffled = [...array];
	let currentIndex = array.length;
	let temporaryValue: T, randomIndex: number;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = shuffled[currentIndex] as T;
		shuffled[currentIndex] = shuffled[randomIndex] as T;
		shuffled[randomIndex] = temporaryValue;
	}
	return shuffled;
}
