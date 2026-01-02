import { describe, it, expect } from "vitest";
import { NoteCounterService } from "../NoteCounterService";

describe("NoteCounterService", () => {
	const service = new NoteCounterService();

	it("should return 0 stats for empty string", () => {
		const stats = service.countStats("");
		expect(stats).toEqual({ words: 0, chars: 0 });
	});

	it("should count words and characters correctly", () => {
		const content = "Hello world";
		const stats = service.countStats(content);
		expect(stats).toEqual({ words: 2, chars: 11 });
	});

	it("should handle multiple spaces", () => {
		const content = "Hello   world  again";
		const stats = service.countStats(content);
		expect(stats).toEqual({ words: 3, chars: 20 });
	});
});
