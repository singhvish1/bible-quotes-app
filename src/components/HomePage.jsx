import { useState } from 'react'
import { MOODS, QUOTES } from '../data/quotes'
import QuoteCard from './QuoteCard'
import MoodModal from './MoodModal'
import './HomePage.css'

function HomePage() {
  const [selectedMood, setSelectedMood] = useState(null)

  const getDailyQuote = () => {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return QUOTES[dayOfYear % QUOTES.length];
  }

  const dailyQuote = getDailyQuote();

  return (
    <div className="home-page">
      <div className="mood-section">
        <h2 className="section-title">How are you feeling today?</h2>
        <p className="section-subtitle">Select your mood to get relevant Bible verses</p>
        
        <div className="mood-grid">
          {MOODS.map(mood => (
            <div 
              key={mood.id}
              className="mood-card"
              onClick={() => setSelectedMood(mood)}
              style={{ '--mood-color': mood.color }}
            >
              <div className="mood-emoji">{mood.emoji}</div>
              <div className="mood-name">{mood.name}</div>
            </div>
          ))}
        </div>
      </div>

      {dailyQuote && (
        <div className="daily-quote-section">
          <h2 className="section-title">📖 Verse of the Day</h2>
          <QuoteCard quote={dailyQuote} />
        </div>
      )}

      {selectedMood && (
        <MoodModal 
          mood={selectedMood} 
          onClose={() => setSelectedMood(null)} 
        />
      )}
    </div>
  )
}

export default HomePage
