import { QUOTES } from '../data/quotes'
import QuoteCard from './QuoteCard'
import './MoodModal.css'

function MoodModal({ mood, onClose }) {
  const filteredQuotes = QUOTES.filter(quote => quote.moods.includes(mood.id))

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header" style={{ '--mood-color': mood.color }}>
          <div className="mood-info">
            <span className="mood-icon">{mood.emoji}</span>
            <div>
              <h2 className="mood-title">{mood.name}</h2>
              <p className="mood-count">{filteredQuotes.length} verses found</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {filteredQuotes.length > 0 ? (
            filteredQuotes.map(quote => (
              <QuoteCard key={quote.id} quote={quote} />
            ))
          ) : (
            <div className="empty-state">
              <p>No quotes found for this mood.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoodModal
