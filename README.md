# NewsExplorer

**NewsExplorer** is a responsive, full-stack React application that allows users to search for news articles by keyword, save articles to their personal account, and manage saved content across sessions. The project emphasizes clean architecture, BEM-based styling, responsive design, and real-world application behavior.

## 🚀 Features

- 🔍 Search for news articles by keyword using an external News API
- 💾 Save and remove articles when logged in
- 🔐 User authentication (login / logout)
- ♻️ Persistent saved articles across sessions
- 📱 Fully responsive layout (desktop, tablet, mobile)
- 🎯 Optimistic UI updates for save actions
- 🧼 Clean, maintainable codebase using BEM methodology

## 🛠️ Tech Stack

### Frontend

- React (with Hooks)
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3 (BEM naming convention)
- Vite

### Backend / APIs

- News API (external)
- Custom API for authentication & saved articles

## 📁 Project Structure

src/
├─ assets/
│ ├─ fonts/
│ └─ images/
│
├─ components/
│ ├─ About/
│ ├─ App/
│ ├─ Footer/
│ ├─ Header/
│ ├─ LoginModal/
│ ├─ Main/
│ ├─ ModalWithForm/
│ ├─ NewsCard/
│ ├─ NewsCardList/
│ ├─ NothingFound/
│ ├─ Preloader/
│ ├─ RegisterModal/
│ └─ SearchForm/
│
├─ pages/
│ ├─ Home.jsx
│ ├─ SavedNews.jsx
│ └─ SavedNews.css
│
├─ utils/
│ ├─ api.js
│ ├─ auth.js
│ ├─ formatDate.js
│ └─ newsApi.js
│
├─ vendor/
│ └─ normalize.css
│
├─ index.css
├─ main.jsx

## 🔐 Authentication Flow

- Users must be logged in to save articles
- Saved articles are fetched on login
- Logging out clears session data and redirects to the home page
- Duplicate saves are prevented both client-side and server-side

## 🎨 Styling & UX

- Strict BEM naming (`block__element_modifier`)
- No inline styles
- Responsive grid layouts
- Mobile-first adjustments where needed
- Accessible form inputs and buttons

## 📦 Installation & Setup

**Repository:** https://github.com/Maupin76/news-explorer-frontend

npm install
npm run dev

## 📦 Project Pitch Video

https://youtu.be/8fxR1eEnCds

📌 Notes

This project was built as part of the TripleTen Software Engineering Bootcamp
Focused on real-world behaviors rather than demo-only features
Codebase intentionally kept readable and reviewer-friendly

👤 Author

Douglas Maupin
Software Engineer
Frontend & Full-Stack Development
React • JavaScript • CSS • APIs
