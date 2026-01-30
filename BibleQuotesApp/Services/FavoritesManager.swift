import Foundation
import Combine

final class FavoritesManager: ObservableObject {
	@Published private(set) var favorites: Set<Int> = []
	private let key = "favorites"

	init() {
		if let saved = UserDefaults.standard.array(forKey: key) as? [Int] {
			favorites = Set(saved)
		}
	}

	func toggle(_ quote: Quote) {
		if favorites.contains(quote.id) { favorites.remove(quote.id) } else { favorites.insert(quote.id) }
		UserDefaults.standard.set(Array(favorites), forKey: key)
		objectWillChange.send()
	}

	func isFavorite(_ quote: Quote) -> Bool {
		favorites.contains(quote.id)
	}

	var favoriteQuotes: [Quote] {
		QuoteService.shared.quotes.filter { favorites.contains($0.id) }
	}
}

