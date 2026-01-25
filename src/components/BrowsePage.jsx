import { useState } from 'react'
import { CATEGORIES, QUOTES } from '../data/quotes'
import QuoteCard from './QuoteCard'
import './BrowsePage.css'

function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const getQuotesByCategory = (categoryId) => {
    return QUOTES.filter(quote => quote.categories.includes(categoryId))
  }

  if (selectedCategory) {
    const quotes = getQuotesByCategory(selectedCategory.id)
    return (
      <div className="browse-page">
        <div className="page-header">
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back
          </button>
          <h2 className="page-title">
            {selectedCategory.icon} {selectedCategory.name}
          </h2>
          <p className="page-subtitle">{quotes.length} verses</p>
        </div>

        <div className="quotes-list">
          {quotes.map(quote => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="browse-page">
      <div className="page-header">
        <h2 className="page-title">Browse by Category</h2>
        <p className="page-subtitle">Explore verses organized by theme</p>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map(category => {
          const count = getQuotesByCategory(category.id).length
          return (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <div className="category-name">{category.name}</div>
                <div className="category-count">{count} verses</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="all-quotes-section">
        <h3 className="section-title">All Verses</h3>
        <div className="quotes-list">
          {QUOTES.map(quote => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowsePage
