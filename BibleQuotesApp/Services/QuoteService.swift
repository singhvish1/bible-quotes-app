import Foundation

final class QuoteService {
	static let shared = QuoteService()
	private(set) var quotes: [Quote] = []

	private init() {
		quotes = BibleQuotesData.loadQuotes()
	}

	func quote(for id: Int) -> Quote? {
		quotes.first { $0.id == id }
	}
}

