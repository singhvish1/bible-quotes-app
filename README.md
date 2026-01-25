# Bible Quotes Web App

A beautiful, responsive web application that provides Bible verses tailored to your current mood. Find comfort, strength, and guidance through God's word.

## ✨ Features

- 📖 **Comprehensive Bible Quotes Database** - 45+ carefully selected verses
- 🎭 **Mood-Based Suggestions** - Get relevant quotes based on 12 different moods
- ⭐ **Favorites System** - Save your favorite verses (stored locally)
- 🔍 **Search Functionality** - Find verses by keyword, book, or reference
- 📚 **Browse by Category** - Explore quotes organized by 15 themes
- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- 🌟 **Daily Verse** - New inspirational verse every day
- 📤 **Share Quotes** - Easily share verses with others

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Usage

1. **Home Page**: Select your current mood to get relevant Bible verses
2. **Browse**: Explore verses by category or view all quotes
3. **Favorites**: Access your saved favorite verses
4. **Search**: Find specific verses using keywords

## 🎨 Moods Supported

- 😰 Anxious
- 😢 Sad
- 🙏 Grateful
- 🕊️ Seeking Peace
- 💪 Needing Strength
- 😊 Joyful
- 🧭 Seeking Guidance
- 😨 Fearful
- 🌟 Hopeful
- 🤍 Lonely
- 😓 Overwhelmed
- 🤔 Doubtful

## 📚 Categories

Faith • Love • Hope • Peace • Strength • Comfort • Wisdom • Guidance • Gratitude • Courage • Forgiveness • Protection • Joy • Patience • Perseverance

## 🛠️ Built With

- **React** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling
- **Local Storage** - For favorites persistence

## 📂 Project Structure

```
src/
├── components/       # React components
│   ├── HomePage.jsx
│   ├── BrowsePage.jsx
│   ├── FavoritesPage.jsx
│   ├── SearchPage.jsx
│   ├── QuoteCard.jsx
│   └── MoodModal.jsx
├── context/          # React context
│   └── FavoritesContext.jsx
├── data/             # Data files
│   └── quotes.js
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## 🎯 Features to Add

- [ ] Dark mode support
- [ ] Multiple translations
- [ ] Reading plans
- [ ] Verse memorization tools
- [ ] Daily notifications
- [ ] Export favorites
- [ ] Social sharing with images

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

All Bible verses are from the New International Version (NIV).

---

Made with ❤️ for those seeking peace and inspiration through God's word.
