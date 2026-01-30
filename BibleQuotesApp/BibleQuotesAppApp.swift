import SwiftUI

@main
struct BibleQuotesAppApp: App {
	@StateObject var favorites = FavoritesManager()

	var body: some Scene {
		WindowGroup {
			ContentView()
				.environmentObject(favorites)
		}
	}
}
