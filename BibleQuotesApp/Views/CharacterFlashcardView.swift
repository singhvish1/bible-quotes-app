import SwiftUI

struct CharacterFlashcardView: View {
	@State private var mode: CharacterFlashcardMode = .learn
	@State private var currentIndex = 0
	@State private var isFlipped = false
	@State private var score = 0
	@State private var answeredCorrectly = Set<Int>()
	
	let characters = CharacterService.shared.characters
	
	var currentCharacter: Character {
		characters[currentIndex]
	}
	
	var progress: Double {
		Double(currentIndex + 1) / Double(characters.count)
	}
	
	var body: some View {
		NavigationView {
			VStack {
				// Mode Picker
				Picker("Mode", selection: $mode) {
					Text("Learn").tag(CharacterFlashcardMode.learn)
					Text("Quiz").tag(CharacterFlashcardMode.quiz)
				}
				.pickerStyle(.segmented)
				.padding()
				
				// Progress Bar
				VStack(alignment: .leading, spacing: 8) {
					HStack {
						Text("Character \(currentIndex + 1) of \(characters.count)")
							.font(.caption)
							.foregroundColor(.secondary)
						Spacer()
						if mode == .quiz {
							Text("Score: \(score)/\(characters.count)")
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
						CharacterLearnCardView(character: currentCharacter, isFlipped: $isFlipped)
					} else {
						CharacterQuizCardView(character: currentCharacter, onCorrect: {
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
					
					Button(action: nextCard) {
						Image(systemName: "chevron.right")
							.frame(maxWidth: .infinity)
							.padding()
							.background(Color.gray.opacity(0.2))
							.cornerRadius(8)
					}
					.disabled(currentIndex == characters.count - 1)
				}
				.padding()
			}
			.navigationTitle("Bible Characters")
		}
	}
	
	private func nextCard() {
		if currentIndex < characters.count - 1 {
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

enum CharacterFlashcardMode {
	case learn
	case quiz
}

struct CharacterLearnCardView: View {
	let character: Character
	@Binding var isFlipped: Bool
	
	var body: some View {
		VStack {
			ZStack {
				RoundedRectangle(cornerRadius: 12)
					.fill(isFlipped ? Color.purple.opacity(0.1) : Color.blue.opacity(0.1))
				
				VStack(spacing: 16) {
					HStack {
						Text(isFlipped ? "Details" : "Character")
							.font(.caption)
							.foregroundColor(.secondary)
						Spacer()
						Image(systemName: "arrow.2.squarepath")
							.font(.caption)
							.foregroundColor(.secondary)
					}
					.padding()
					
					Spacer()
					
					if isFlipped {
						VStack(alignment: .leading, spacing: 12) {
							VStack(alignment: .leading, spacing: 4) {
								Text("Period: \(character.period)")
									.font(.caption)
									.foregroundColor(.secondary)
								Text("Notable Incidents:")
									.font(.caption2)
									.fontWeight(.bold)
									.foregroundColor(.secondary)
								ForEach(character.incidents.prefix(2), id: \.self) { incident in
									Text("• \(incident)")
										.font(.caption)
										.lineLimit(2)
								}
								if character.incidents.count > 2 {
									Text("+ \(character.incidents.count - 2) more")
										.font(.caption)
										.foregroundColor(.secondary)
								}
							}
						}
						.padding()
					} else {
						VStack(alignment: .center, spacing: 12) {
							Text(character.name)
								.font(.title2)
								.fontWeight(.bold)
								.multilineTextAlignment(.center)
							Text(character.description)
								.font(.body)
								.multilineTextAlignment(.center)
								.lineLimit(4)
						}
						.padding()
					}
					
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

struct CharacterQuizCardView: View {
	let character: Character
	let onCorrect: () -> Void
	let onSkip: () -> Void
	
	@State private var userGuess = ""
	@State private var showHint = false
	@State private var showAnswer = false
	@State private var quizType = 0 // 0: name from description, 1: incident matching
	
	var isCorrect: Bool {
		userGuess.lowercased().trimmingCharacters(in: .whitespaces) ==
		character.name.lowercased().trimmingCharacters(in: .whitespaces)
	}
	
	var body: some View {
		VStack(spacing: 16) {
			if quizType == 0 {
				// Name guessing quiz
				VStack(spacing: 16) {
					Text("Who is this biblical figure?")
						.font(.headline)
						.foregroundColor(.secondary)
						.padding()
					
					ZStack {
						RoundedRectangle(cornerRadius: 12)
							.fill(Color.purple.opacity(0.1))
						
						Text(character.description)
							.font(.body)
							.multilineTextAlignment(.center)
							.padding()
					}
					.padding()
					
					VStack(spacing: 12) {
						TextField("Enter the character name", text: $userGuess)
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
							Text("First letter: \(character.name.prefix(1))")
								.font(.caption)
								.foregroundColor(.orange)
								.padding()
						}
						
						if showAnswer {
							VStack(alignment: .leading, spacing: 8) {
								Text("Correct Answer:")
									.font(.caption)
									.foregroundColor(.secondary)
								Text(character.name)
									.font(.body)
									.padding()
									.background(Color.green.opacity(0.1))
									.cornerRadius(8)
							}
							.padding()
						}
					}
				}
			} else {
				// Incident matching quiz
				VStack(spacing: 16) {
					Text("Which character is this incident about?")
						.font(.headline)
						.foregroundColor(.secondary)
						.padding()
					
					ZStack {
						RoundedRectangle(cornerRadius: 12)
							.fill(Color.blue.opacity(0.1))
						
						Text(character.incidents.randomElement() ?? "Unknown incident")
							.font(.body)
							.multilineTextAlignment(.center)
							.padding()
					}
					.padding()
					
					VStack(spacing: 12) {
						TextField("Enter the character name", text: $userGuess)
							.textFieldStyle(RoundedBorderTextFieldStyle())
							.padding()
						
						if !showAnswer {
							Button(action: { showAnswer = true }) {
								Label("Show Answer", systemImage: "eye")
									.frame(maxWidth: .infinity)
									.padding(8)
									.background(Color.blue.opacity(0.2))
									.cornerRadius(8)
							}
							.padding()
						}
						
						if showAnswer {
							VStack(alignment: .leading, spacing: 8) {
								Text("Correct Answer:")
									.font(.caption)
									.foregroundColor(.secondary)
								Text(character.name)
									.font(.body)
									.padding()
									.background(Color.green.opacity(0.1))
									.cornerRadius(8)
							}
							.padding()
						}
					}
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

struct CharacterFlashcardView_Previews: PreviewProvider {
	static var previews: some View {
		CharacterFlashcardView()
	}
}
