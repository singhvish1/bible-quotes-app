import SwiftUI

struct FavoritesView: View {
	@EnvironmentObject var favorites: FavoritesManager

	var body: some View {
		List {
			if favorites.favoriteQuotes.isEmpty {
				Text("No favorites yet").foregroundColor(.secondary)
			} else {
				ForEach(favorites.favoriteQuotes) { q in
					NavigationLink(destination: QuoteDetailView(quote: q)) {
						VStack(alignment: .leading) {
							Text(q.text).lineLimit(2)
							if let ref = q.reference { Text(ref).font(.caption).foregroundColor(.secondary) }
						}
					}
				}
			}
		}
		.navigationTitle("Favorites")
	}
}

struct FavoritesView_Previews: PreviewProvider {
	static var previews: some View {
		NavigationView { FavoritesView().environmentObject(FavoritesManager()) }
	}
}

