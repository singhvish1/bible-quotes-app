import SwiftUI

struct ContentView: View {
	var body: some View {
		TabView {
			NavigationView {
				HomeView()
			}
			.tabItem {
				Image(systemName: "house.fill")
				Text("Home")
			}

			NavigationView {
				BrowseView()
			}
			.tabItem {
				Image(systemName: "books.vertical.fill")
				Text("Browse")
			}

			NavigationView {
				MoodQuotesView()
			}
			.tabItem {
				Image(systemName: "sparkles")
				Text("Moods")
			}

			FlashcardView()
			.tabItem {
				Image(systemName: "rectangle.on.rectangle")
				Text("Flashcards")
			}

			CharacterFlashcardView()
			.tabItem {
				Image(systemName: "person.2.fill")
				Text("Characters")
			}

			NavigationView {
				SearchView()
			}
			.tabItem {
				Image(systemName: "magnifyingglass")
				Text("Search")
			}

			NavigationView {
				FavoritesView()
			}
			.tabItem {
				Image(systemName: "star.fill")
				Text("Favorites")
			}
		}
	}
}

struct ContentView_Previews: PreviewProvider {
	static var previews: some View {
		ContentView()
	}
}
