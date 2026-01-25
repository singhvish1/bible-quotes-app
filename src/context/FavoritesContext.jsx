import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('bibleQuotesFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bibleQuotesFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (quoteId) => {
    setFavorites(prev => [...prev, quoteId]);
  };

  const removeFavorite = (quoteId) => {
    setFavorites(prev => prev.filter(id => id !== quoteId));
  };

  const isFavorite = (quoteId) => {
    return favorites.includes(quoteId);
  };

  const toggleFavorite = (quoteId) => {
    if (isFavorite(quoteId)) {
      removeFavorite(quoteId);
    } else {
      addFavorite(quoteId);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
