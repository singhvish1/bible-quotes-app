import SwiftUI

struct SearchView: View {
	@State private var searchText = ""
	@EnvironmentObject var favorites: FavoritesManager
	
	var filteredQuotes: [Quote] {
		let quotes = QuoteService.shared.quotes
		if searchText.isEmpty {
			return quotes
		}
		return quotes.filter { quote in
			quote.text.lowercased().contains(searchText.lowercased()) ||
			(quote.reference?.lowercased().contains(searchText.lowercased()) ?? false)
		}
	}
	
	var body: some View {
		NavigationView {
			VStack {
				SearchBar(text: $searchText)
				
				if filteredQuotes.isEmpty {
					VStack {
						Image(systemName: "magnifyingglass")
							.font(.system(size: 48))
							.foregroundColor(.gray)
						Text("No quotes found")
							.foregroundColor(.secondary)
					}
					.frame(maxHeight: .infinity, alignment: .center)
				} else {
					List(filteredQuotes) { quote in
						NavigationLink(destination: QuoteDetailView(quote: quote)) {
							VStack(alignment: .leading, spacing: 4) {
								Text(quote.text)
									.lineLimit(2)
									.font(.body)
								if let ref = quote.reference {
									Text(ref)
										.font(.caption)
										.foregroundColor(.secondary)
								}
							}
						}
					}
				}
			}
			.navigationTitle("Search")
		}
	}
}

struct SearchBar: View {
	@Binding var text: String
	
	var body: some View {
		HStack {
			Image(systemName: "magnifyingglass")
				.foregroundColor(.gray)
			
			TextField("Search quotes or references", text: $text)
				.textFieldStyle(RoundedBorderTextFieldStyle())
			
			if !text.isEmpty {
				Button(action: { text = "" }) {
					Image(systemName: "xmark.circle.fill")
						.foregroundColor(.gray)
				}
			}
		}
		.padding()
	}
}

struct SearchView_Previews: PreviewProvider {
	static var previews: some View {
		SearchView().environmentObject(FavoritesManager())
	}
}
