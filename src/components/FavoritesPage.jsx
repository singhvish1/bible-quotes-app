import { useFavorites } from '../context/FavoritesContext'
import { QUOTES } from '../data/quotes'
import QuoteCard from './QuoteCard'
import './FavoritesPage.css'

function FavoritesPage() {
  const { favorites } = useFavorites()
  const favoriteQuotes = QUOTES.filter(quote => favorites.includes(quote.id))

  return (
    <div className="favorites-page">
      <div className="page-header">
        <h2 className="page-title">Your Favorites</h2>
        <p className="page-subtitle">
          {favoriteQuotes.length} {favoriteQuotes.length === 1 ? 'verse' : 'verses'} saved
        </p>
      </div>

      {favoriteQuotes.length > 0 ? (
        <div className="quotes-list">
          {favoriteQuotes.map(quote => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">⭐</div>
          <h3>No Favorites Yet</h3>
          <p>
            Tap the star icon on any verse to add it to your favorites for easy access.
          </p>
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
