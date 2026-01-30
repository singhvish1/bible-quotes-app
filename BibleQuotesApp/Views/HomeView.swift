import SwiftUI

struct HomeView: View {
	let quotes = QuoteService.shared.quotes
	@EnvironmentObject var favorites: FavoritesManager

	var quotesByBook: [String: [Quote]] {
		let grouped = Dictionary(grouping: quotes) { $0.book ?? "Unknown" }
		return grouped.sorted { $0.key < $1.key }
			.reduce(into: [String: [Quote]]()) { result, group in
				result[group.key] = group.value.sorted { $0.id < $1.id }
			}
	}

	var body: some View {
		List {
			ForEach(quotesByBook.keys.sorted(), id: \.self) { book in
				Section(header: Text(book).font(.headline).fontWeight(.bold)) {
					ForEach(quotesByBook[book] ?? []) { quote in
						NavigationLink(destination: QuoteDetailView(quote: quote)) {
							VStack(alignment: .leading, spacing: 6) {
								Text(quote.text)
									.font(.body)
									.lineLimit(2)
								if let ref = quote.reference {
									Text(ref)
										.font(.caption)
										.foregroundColor(.secondary)
								}
							}
							.padding(.vertical, 6)
						}
					}
				}
			}
		}
		.navigationTitle("All Quotes")
	}
}

struct QuoteDetailView: View {
	let quote: Quote
	@EnvironmentObject var favorites: FavoritesManager

	var body: some View {
		ScrollView {
			VStack(alignment: .leading, spacing: 16) {
				Text(quote.text)
					.font(.title3)
				if let ref = quote.reference {
					Text(ref).font(.subheadline).foregroundColor(.secondary)
				}
				HStack {
					Button(action: { favorites.toggle(quote) }) {
						Label(favorites.isFavorite(quote) ? "Unfavorite" : "Favorite", systemImage: favorites.isFavorite(quote) ? "star.fill" : "star")
					}
	
					Spacer()
				}
			}
			.padding()
		}
		.navigationTitle("Quote")
	}
}

struct HomeView_Previews: PreviewProvider {
	static var previews: some View {
		NavigationView { HomeView().environmentObject(FavoritesManager()) }
	}
}

