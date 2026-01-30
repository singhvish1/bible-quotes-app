import SwiftUI

struct MoodQuotesView: View {
	@State private var selectedMood: String?
	@EnvironmentObject var favorites: FavoritesManager
	
	let moods = ["anxious", "seekingPeace", "overwhelmed", "fearful", "needingStrength", "doubtful", "hopeful", "grateful", "joyful", "confused"]
	
	var filteredQuotes: [Quote] {
		guard let mood = selectedMood else {
			return []
		}
		return QuoteService.shared.quotes.filter { quote in
			quote.moods?.contains(mood) ?? false
		}
	}
	
	var body: some View {
		NavigationView {
			VStack {
				ScrollView(.horizontal, showsIndicators: false) {
					HStack(spacing: 8) {
						ForEach(moods, id: \.self) { mood in
							Button(action: { selectedMood = mood }) {
								Text(mood.replacingOccurrences(of: "([A-Z])", with: " $1", options: .regularExpression).trimmingCharacters(in: .whitespaces).capitalized)
									.padding(.horizontal, 12)
									.padding(.vertical, 6)
									.background(selectedMood == mood ? Color.blue : Color.gray.opacity(0.3))
									.foregroundColor(selectedMood == mood ? .white : .primary)
									.cornerRadius(16)
							}
						}
					}
					.padding()
				}
				
				if let mood = selectedMood {
					if filteredQuotes.isEmpty {
						VStack {
							Image(systemName: "quote.opening")
								.font(.system(size: 48))
								.foregroundColor(.gray)
							Text("No quotes for this mood")
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
						Text("Select a mood to see quotes")
							.foregroundColor(.secondary)
					}
					.frame(maxHeight: .infinity, alignment: .center)
				}
			}
			.navigationTitle("By Mood")
		}
	}
}

struct MoodQuotesView_Previews: PreviewProvider {
	static var previews: some View {
		MoodQuotesView().environmentObject(FavoritesManager())
	}
}
