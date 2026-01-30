import Foundation

struct Character: Identifiable, Codable {
	let id: Int
	let name: String
	let description: String
	let keyVerses: [String]
	let incidents: [String]
	let lessons: [String]
	let period: String
	let relatedCharacters: [String]?
}
