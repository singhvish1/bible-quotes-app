import SwiftUI

struct AllQuotesView: View {
	let quotes = QuoteService.shared.quotes
	@EnvironmentObject var favorites: FavoritesManager

	var body: some View {
		List(quotes) { quote in
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

struct AllQuotesView_Previews: PreviewProvider {
	static var previews: some View {
		NavigationView { AllQuotesView().environmentObject(FavoritesManager()) }
	}
}

