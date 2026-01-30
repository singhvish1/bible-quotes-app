import SwiftUI

struct ContentView: View {
	var body: some View {
		TabView {
			NavigationView {
				AllQuotesView()
			}
			.tabItem {
				Label("All", systemImage: "list.bullet")
			}

			NavigationView {
				FavoritesView()
			}
			.tabItem {
				Label("Favorites", systemImage: "star.fill")
			}
		}
	}
}

struct ContentView_Previews: PreviewProvider {
	static var previews: some View {
		ContentView()
	}
}
