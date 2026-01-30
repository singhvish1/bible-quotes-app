import SwiftUI

struct BrowseView: View {
	@State private var selectedCategory: String?
	@EnvironmentObject var favorites: FavoritesManager
	
	let categories = ["peace", "comfort", "courage", "strength", "joy", "hope"]
	
	var filteredQuotes: [Quote] {
		guard let category = selectedCategory else {
			return []
		}
		return QuoteService.shared.quotes.filter { quote in
			quote.categories?.contains(category) ?? false
		}
	}
	
	var body: some View {
		NavigationView {
			VStack {
				ScrollView(.horizontal, showsIndicators: false) {
					HStack(spacing: 8) {
						ForEach(categories, id: \.self) { category in
							Button(action: { selectedCategory = category }) {
								Text(category.capitalized)
									.padding(.horizontal, 12)
									.padding(.vertical, 6)
									.background(selectedCategory == category ? Color.green : Color.gray.opacity(0.3))
									.foregroundColor(selectedCategory == category ? .white : .primary)
									.cornerRadius(16)
							}
						}
					}
					.padding()
				}
				
				if let category = selectedCategory {
					if filteredQuotes.isEmpty {
						VStack {
							Image(systemName: "quote.opening")
								.font(.system(size: 48))
								.foregroundColor(.gray)
							Text("No quotes in this category")
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
				} else {
					VStack {
						Image(systemName: "hand.point.up")
							.font(.system(size: 48))
							.foregroundColor(.gray)
						Text("Select a category to browse")
							.foregroundColor(.secondary)
					}
					.frame(maxHeight: .infinity, alignment: .center)
				}
			}
			.navigationTitle("Browse")
		}
	}
}

struct BrowseView_Previews: PreviewProvider {
	static var previews: some View {
		BrowseView().environmentObject(FavoritesManager())
	}
}
