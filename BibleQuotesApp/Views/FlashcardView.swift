import SwiftUI

struct FlashcardView: View {
	@State private var mode: FlashcardMode = .learn
	@State private var currentIndex = 0
	@State private var isFlipped = false
	@State private var score = 0
	@State private var answeredCorrectly = Set<Int>()
	@EnvironmentObject var favorites: FavoritesManager
	
	let quotes = QuoteService.shared.quotes
	
	var currentQuote: Quote {
		quotes[currentIndex]
	}
	
	var progress: Double {
		Double(currentIndex + 1) / Double(quotes.count)
	}
	
	var body: some View {
		NavigationView {
			VStack {
				// Mode Picker
				Picker("Mode", selection: $mode) {
					Text("Learn").tag(FlashcardMode.learn)
					Text("Quiz").tag(FlashcardMode.quiz)
				}
				.pickerStyle(.segmented)
				.padding()
				
				// Progress Bar
				VStack(alignment: .leading, spacing: 8) {
					HStack {
						Text("Card \(currentIndex + 1) of \(quotes.count)")
							.font(.caption)
							.foregroundColor(.secondary)
						Spacer()
						if mode == .quiz {
							Text("Score: \(score)/\(quotes.count)")
								.font(.caption)
								.foregroundColor(.secondary)
						}
					}
					ProgressView(value: progress)
				}
				.padding()
				
				// Flashcard
				VStack {
					if mode == .learn {
						LearnCardView(quote: currentQuote, isFlipped: $isFlipped)
					} else {
						QuizCardView(quote: currentQuote, onCorrect: {
							if !answeredCorrectly.contains(currentIndex) {
								score += 1
								answeredCorrectly.insert(currentIndex)
							}
							nextCard()
						}, onSkip: {
							nextCard()
						})
					}
				}
				.frame(maxHeight: .infinity)
				
				// Navigation Buttons
				HStack(spacing: 16) {
					Button(action: previousCard) {
						Image(systemName: "chevron.left")
							.frame(maxWidth: .infinity)
							.padding()
							.background(Color.gray.opacity(0.2))
							.cornerRadius(8)
					}
					.disabled(currentIndex == 0)
					
					Button(action: { 
						favorites.toggle(currentQuote)
					}) {
						Image(systemName: favorites.isFavorite(currentQuote) ? "star.fill" : "star")
							.frame(maxWidth: .infinity)
							.padding()
							.background(Color.yellow.opacity(0.2))
							.cornerRadius(8)
					}
					
					Button(action: nextCard) {
						Image(systemName: "chevron.right")
							.frame(maxWidth: .infinity)
							.padding()
							.background(Color.gray.opacity(0.2))
							.cornerRadius(8)
					}
					.disabled(currentIndex == quotes.count - 1)
				}
				.padding()
			}
			.navigationTitle("Flashcards")
		}
	}
	
	private func nextCard() {
		if currentIndex < quotes.count - 1 {
			currentIndex += 1
			isFlipped = false
		}
	}
	
	private func previousCard() {
		if currentIndex > 0 {
			currentIndex -= 1
			isFlipped = false
		}
	}
}

enum FlashcardMode {
	case learn
	case quiz
}

struct LearnCardView: View {
	let quote: Quote
	@Binding var isFlipped: Bool
	
	var body: some View {
		VStack {
			ZStack {
				RoundedRectangle(cornerRadius: 12)
					.fill(isFlipped ? Color.blue : Color.green)
					.opacity(0.1)
				
				VStack(spacing: 24) {
					HStack {
						Text(isFlipped ? "Reference" : "Quote")
							.font(.caption)
							.foregroundColor(.secondary)
						Spacer()
						Image(systemName: "arrow.2.squarepath")
							.font(.caption)
							.foregroundColor(.secondary)
					}
					.padding()
					
					Spacer()
					
					VStack(alignment: .center, spacing: 16) {
						if isFlipped {
							Text(quote.reference ?? "")
								.font(.title2)
								.fontWeight(.bold)
								.multilineTextAlignment(.center)
							if let book = quote.book {
								Text(book)
									.font(.subheadline)
									.foregroundColor(.secondary)
							}
						} else {
							Text(quote.text)
								.font(.body)
								.multilineTextAlignment(.center)
						}
					}
					.padding()
					
					Spacer()
					
					Text("Tap to flip")
						.font(.caption)
						.foregroundColor(.secondary)
						.padding()
				}
			}
			.onTapGesture {
				withAnimation {
					isFlipped.toggle()
				}
			}
		}
		.padding()
	}
}

struct QuizCardView: View {
	let quote: Quote
	let onCorrect: () -> Void
	let onSkip: () -> Void
	
	@State private var userGuess = ""
	@State private var showHint = false
	@State private var showAnswer = false
	
	var isCorrect: Bool {
		userGuess.lowercased().trimmingCharacters(in: .whitespaces) ==
		quote.text.lowercased().trimmingCharacters(in: .whitespaces)
	}
	
	var body: some View {
		VStack(spacing: 20) {
			Text("What quote goes with this reference?")
				.font(.headline)
				.foregroundColor(.secondary)
				.padding()
			
			ZStack {
				RoundedRectangle(cornerRadius: 12)
					.fill(Color.blue.opacity(0.1))
				
				VStack {
					Text(quote.reference ?? "")
						.font(.title3)
						.fontWeight(.bold)
						.multilineTextAlignment(.center)
					if let book = quote.book {
						Text(book)
							.font(.caption)
							.foregroundColor(.secondary)
					}
				}
				.padding()
			}
			.padding()
			
			VStack(spacing: 12) {
				TextField("Enter the quote", text: $userGuess)
					.textFieldStyle(RoundedBorderTextFieldStyle())
					.padding()
				
				if !showAnswer {
					HStack {
						Button(action: { showHint.toggle() }) {
							Label("Hint", systemImage: "lightbulb")
								.frame(maxWidth: .infinity)
								.padding(8)
								.background(Color.orange.opacity(0.2))
								.cornerRadius(8)
						}
						
						Button(action: { showAnswer = true }) {
							Label("Show", systemImage: "eye")
								.frame(maxWidth: .infinity)
								.padding(8)
								.background(Color.blue.opacity(0.2))
								.cornerRadius(8)
						}
					}
					.padding()
				}
				
				if showHint && !showAnswer {
					Text("Quote starts with: \(quote.text.prefix(20))...")
						.font(.caption)
						.foregroundColor(.orange)
						.padding()
				}
				
				if showAnswer {
					VStack(alignment: .leading, spacing: 8) {
						Text("Correct Answer:")
							.font(.caption)
							.foregroundColor(.secondary)
						Text(quote.text)
							.font(.body)
							.padding()
							.background(Color.green.opacity(0.1))
							.cornerRadius(8)
					}
					.padding()
				}
			}
			
			Spacer()
			
			if showAnswer {
				HStack(spacing: 12) {
					Button(action: onSkip) {
						Text("Next")
							.frame(maxWidth: .infinity)
							.padding()
							.background(Color.gray.opacity(0.2))
							.cornerRadius(8)
					}
					
					if isCorrect {
						Button(action: onCorrect) {
							Text("✓ Correct")
								.frame(maxWidth: .infinity)
								.padding()
								.background(Color.green.opacity(0.3))
								.cornerRadius(8)
						}
					}
				}
				.padding()
			}
		}
	}
}

struct FlashcardView_Previews: PreviewProvider {
	static var previews: some View {
		FlashcardView().environmentObject(FavoritesManager())
	}
}
