export default class RandomBidGenerator {
	
	/**
	 * This is a possible implementation for generating unique business ids or simply ids.
	 * 
	 * This works by combining a portion of the current timestamp in hexadecimal format
	 * with a random hexadecimal string.
	 * 
	 * The conversion to hexadecimal helps in shortening the length of the id while still
	 * retaining a good amount of uniqueness.
	 * 
	 * This would not be a good implementation for systems where a high volume of ids are generated
	 * at a time, but since this a simple app for a challenge I didnt bother with more complex implementations.
	 * @returns 
	 */
	static generate(): string {
		const timestamp = Date.now().toString(16).substring(4, 7).toUpperCase();
		const random = Math.random().toString(16).substring(2, 8).toUpperCase();
		return `${timestamp}${random}`;
	}
}