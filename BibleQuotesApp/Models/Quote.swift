import Foundation

struct Quote: Identifiable, Codable {
	let id: Int
	let text: String
	let reference: String?
	let book: String?
	let chapter: Int?
	let verse: String?
	let categories: [String]?
	let moods: [String]?
}
