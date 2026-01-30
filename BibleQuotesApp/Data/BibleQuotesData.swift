import Foundation

enum BibleQuotesData {
	static func loadQuotes() -> [Quote] {
		guard let url = Bundle.main.url(forResource: "quotes", withExtension: "json") else {
			return []
		}

		do {
			let data = try Data(contentsOf: url)
			let decoder = JSONDecoder()
			return try decoder.decode([Quote].self, from: data)
		} catch {
			print("Failed to load quotes.json:", error)
			return []
		}
	}
}
		} catch {
			print("Failed to decode quotes.json:", error)
			return []
		}
	}
}
