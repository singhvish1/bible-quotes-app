import { useFavorites } from '../context/FavoritesContext'
import './QuoteCard.css'

function QuoteCard({ quote }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(quote.id)

  const handleShare = () => {
    const shareText = `"${quote.text}"\n\n- ${quote.reference}`
    if (navigator.share) {
      navigator.share({
        title: 'Bible Quote',
        text: shareText
      })
    } else {
      navigator.clipboard.writeText(shareText)
      alert('Quote copied to clipboard!')
    }
  }

  return (
    <div className="quote-card">
      <p className="quote-text">{quote.text}</p>
      <p className="quote-reference">{quote.reference}</p>
      
      <div className="quote-categories">
        {quote.categories.slice(0, 3).map(cat => (
          <span key={cat} className="category-tag">{cat}</span>
        ))}
      </div>

      <div className="quote-actions">
        <button 
          className={`action-btn ${favorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(quote.id)}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span className="action-icon">{favorite ? '⭐' : '☆'}</span>
          <span className="action-label">{favorite ? 'Saved' : 'Save'}</span>
        </button>

        <button 
          className="action-btn"
          onClick={handleShare}
          aria-label="Share quote"
        >
          <span className="action-icon">📤</span>
          <span className="action-label">Share</span>
        </button>
      </div>
    </div>
  )
}

export default QuoteCard
