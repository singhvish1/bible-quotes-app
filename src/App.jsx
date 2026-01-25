import { useState } from 'react'
import HomePage from './components/HomePage'
import BrowsePage from './components/BrowsePage'
import FavoritesPage from './components/FavoritesPage'
import SearchPage from './components/SearchPage'
import { FavoritesProvider } from './context/FavoritesContext'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'browse':
        return <BrowsePage />
      case 'favorites':
        return <FavoritesPage />
      case 'search':
        return <SearchPage />
      default:
        return <HomePage />
    }
  }

  return (
    <FavoritesProvider>
      <div className="app">
        <header className="app-header">
          <div className="header-content">
            <h1>📖 Bible Quotes</h1>
            <p className="tagline">Find peace and inspiration through God's word</p>
          </div>
        </header>

        <main className="app-main">
          {renderPage()}
        </main>

        <nav className="app-nav">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </button>
          <button 
            className={`nav-btn ${currentPage === 'browse' ? 'active' : ''}`}
            onClick={() => setCurrentPage('browse')}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-label">Browse</span>
          </button>
          <button 
            className={`nav-btn ${currentPage === 'favorites' ? 'active' : ''}`}
            onClick={() => setCurrentPage('favorites')}
          >
            <span className="nav-icon">⭐</span>
            <span className="nav-label">Favorites</span>
          </button>
          <button 
            className={`nav-btn ${currentPage === 'search' ? 'active' : ''}`}
            onClick={() => setCurrentPage('search')}
          >
            <span className="nav-icon">🔍</span>
            <span className="nav-label">Search</span>
          </button>
        </nav>
      </div>
    </FavoritesProvider>
  )
}

export default App
