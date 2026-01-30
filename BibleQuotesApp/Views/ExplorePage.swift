import SwiftUI

struct ExplorePage: View {
	@State private var selectedCategory: String?
	@State private var selectedMood: String?
	@State private var filterType: FilterType = .categories
	@EnvironmentObject var favorites: FavoritesManager
	
	let categories = ["peace", "comfort", "courage", "strength", "joy", "hope", "faith", "love", "wisdom", "virtue", "grace", "blessing"]
	let moods = ["anxious", "seekingPeace", "overwhelmed", "fearful", "needingStrength", "doubtful", "hopeful", "grateful", "joyful", "confused", "inspired", "lonely", "sad", "peaceful"]
	
	enum FilterType {
		case categories
		case moods
	}
	
	var filteredQuotes: [Quote] {
		let quotes = QuoteService.shared.quotes
		
		switch filterType {
		case .categories:
			guard let category = selectedCategory else { return [] }
			return quotes.filter { quote in
				quote.categories?.contains(category) ?? false
			}
		case .moods:
			guard let mood = selectedMood else { return [] }
			return quotes.filter { quote in
				quote.moods?.contains(mood) ?? false
			}
		}
	}
	
	var body: some View {
		NavigationView {
			VStack {
				// Filter Type Selector
				Picker("Filter Type", selection: $filterType) {
					Text("Categories").tag(FilterType.categories)
					Text("Moods").tag(FilterType.moods)
				}
				.pickerStyle(.segmented)
				.padding()
				
				// Dynamic Filter Options
				ScrollView(.horizontal, showsIndicators: false) {
					HStack(spacing: 8) {
						if filterType == .categories {
							ForEach(categories, id: \.self) { category in
								Button(action: { selectedCategory = category; selectedMood = nil }) {
									Text(category.capitalized)
										.padding(.horizontal, 12)
										.padding(.vertical, 6)
										.background(selectedCategory == category ? Color.green : Color.gray.opacity(0.3))
										.foregroundColor(selectedCategory == category ? .white : .primary)
										.cornerRadius(16)
								}
							}
						} else {
							ForEach(moods, id: \.self) { mood in
								Button(action: { selectedMood = mood; selectedCategory = nil }) {
									Text(mood.replacingOccurrences(of: "([A-Z])", with: " $1", options: .regularExpression).trimmingCharacters(in: .whitespaces).capitalized)
										.padding(.horizontal, 12)
										.padding(.vertical, 6)
										.background(selectedMood == mood ? Color.blue : Color.gray.opacity(0.3))
										.foregroundColor(selectedMood == mood ? .white : .primary)
										.cornerRadius(16)
								}
							}
						}
					}
					.padding()
				}
				
				// Filtered Quotes List
				if (filterType == .categories && selectedCategory == nil) || (filterType == .moods && selectedMood == nil) {
					VStack {
						Image(systemName: "quote.opening")
							.font(.system(size: 48))
							.foregroundColor(.gray)
						Text("Select a \(filterType == .categories ? "category" : "mood")")
							.foregroundColor(.secondary)
					}
					.frame(maxHeight: .infinity, alignment: .center)
				} else if filteredQuotes.isEmpty {
					VStack {
						Image(systemName: "quote.opening")
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
			.navigationTitle("Explore")
		}
	}
}

struct ExplorePage_Previews: PreviewProvider {
	static var previews: some View {
		ExplorePage().environmentObject(FavoritesManager())
	}
}
