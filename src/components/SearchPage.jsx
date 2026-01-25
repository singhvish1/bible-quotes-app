import { useState } from 'react'
import { QUOTES } from '../data/quotes'
import QuoteCard from './QuoteCard'
import './SearchPage.css'

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const searchResults = QUOTES.filter(quote => {
    const query = searchQuery.toLowerCase()
    return (
      quote.text.toLowerCase().includes(query) ||
      quote.reference.toLowerCase().includes(query) ||
      quote.book.toLowerCase().includes(query)
    )
  })

  return (
    <div className="search-page">
      <div className="search-header">
        <h2 className="page-title">Search Verses</h2>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by keyword, book, or reference..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="clear-btn" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {!searchQuery ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>Search Bible Verses</h3>
          <p>
            Search by keyword, book name, or reference to find the perfect verse.
          </p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="search-results">
          <p className="results-count">
            {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
          </p>
          <div className="quotes-list">
            {searchResults.map(quote => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <h3>No Results Found</h3>
          <p>
            Try searching with different keywords or check your spelling.
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchPage
