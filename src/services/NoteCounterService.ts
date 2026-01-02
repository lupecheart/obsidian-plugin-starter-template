export interface NoteStats {
	words: number;
	chars: number;
}

export class NoteCounterService {
	/**
	 * Counts the number of words and characters in the given content.
	 * @param content The string content to analyze.
	 * @returns An object containing word and character counts.
	 */
	countStats(content: string): NoteStats {
		if (!content) {
			return { words: 0, chars: 0 };
		}

		const words = content
			.trim()
			.split(/\s+/)
			.filter((word) => word.length > 0).length;
		const chars = content.length;

		return { words, chars };
	}
}
