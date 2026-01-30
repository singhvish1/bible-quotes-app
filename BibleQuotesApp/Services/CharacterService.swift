import Foundation

class CharacterService {
	static let shared = CharacterService()
	
	var characters: [Character] = []
	
	init() {
		self.characters = loadCharacters()
	}
	
	private func loadCharacters() -> [Character] {
		guard let url = Bundle.main.url(forResource: "characters", withExtension: "json") else {
			return []
		}
		
		do {
			let data = try Data(contentsOf: url)
			let decoder = JSONDecoder()
			return try decoder.decode([Character].self, from: data)
		} catch {
			print("Failed to load characters.json:", error)
			return []
		}
	}
	
	func getCharacterById(_ id: Int) -> Character? {
		return characters.first { $0.id == id }
	}
}
