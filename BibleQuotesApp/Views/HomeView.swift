import SwiftUI

enum BookSortOption {
	case alphabetical
	case quoteCount
}

struct HomeView: View {
	let quotes = QuoteService.shared.quotes
	@EnvironmentObject var favorites: FavoritesManager
	@State private var expandedBooks = Set<String>()
	@State private var sortOption: BookSortOption = .alphabetical

	var quotesByBook: [String: [Quote]] {
		let grouped = Dictionary(grouping: quotes) { $0.book ?? "Unknown" }
		return grouped.reduce(into: [String: [Quote]]()) { result, group in
			result[group.key] = group.value.sorted { $0.id < $1.id }
		}
	}

	var sortedBooks: [String] {
		switch sortOption {
		case .alphabetical:
			return quotesByBook.keys.sorted()
		case .quoteCount:
			return quotesByBook.keys.sorted { 
				(quotesByBook[$0]?.count ?? 0) > (quotesByBook[$1]?.count ?? 0)
			}
		}
	}

	var body: some View {
		List {
			Section(header: Text("Sort by").font(.headline)) {
				Picker("Sort Books", selection: $sortOption) {
					Text("Alphabetically").tag(BookSortOption.alphabetical)
					Text("Quote Count").tag(BookSortOption.quoteCount)
				}
				.pickerStyle(.segmented)
			}

			ForEach(sortedBooks, id: \.self) { book in
				DisclosureGroup(
					isExpanded: Binding(
						get: { expandedBooks.contains(book) },
						set: { isExpanded in
							if isExpanded {
								expandedBooks.insert(book)
							} else {
								expandedBooks.remove(book)
							}
						}
					)
				) {
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
				} label: {
					HStack {
						Text(book)
							.font(.headline)
							.fontWeight(.bold)
						Spacer()
						Text("(\(quotesByBook[book]?.count ?? 0))")
							.font(.caption)
							.foregroundColor(.secondary)
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


