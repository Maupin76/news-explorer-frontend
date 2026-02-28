import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { signin, signup, getCurrentUser } from "../../utils/auth";
import { getItems, saveArticle, deleteArticle } from "../../utils/api";

import Header from "../Header/Header";
import Home from "../../pages/Home";
import SavedNews from "../../pages/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  function openLogin() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function openRegister() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  }

  function handleRegister(email, password, name) {
    return signup(email, password, name).then(() => {
      return handleLogin(email, password);
    });
  }

  function handleLogin(email, password) {
    signin(email, password)
      .then(({ token }) => {
        sessionStorage.setItem("jwt", token);
        setIsLoggedIn(true);
        return getCurrentUser(token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoginOpen(false);
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  }

  function handleLogout() {
    sessionStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);
  }

  function handleSaveArticle(article) {
    if (!isLoggedIn) return;

    const isAlreadySaved = savedArticles.some(
      (saved) => saved.title === article.title,
    );

    if (isAlreadySaved) return;

    setSavedArticles((prev) => [...prev, article]);

    saveArticle(article)
      .then((saved) => {
        setSavedArticles((prev) =>
          prev.map((item) => (item.title === article.title ? saved : item)),
        );
      })
      .catch(() => {
        setSavedArticles((prev) =>
          prev.filter((item) => item.title !== article.title),
        );
      });
  }

  function handleDeleteArticle(id) {
    deleteArticle(id)
      .then(() => {
        setSavedArticles((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    if (!token) return;

    getCurrentUser(token)
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(() => {
        sessionStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser(null);
      });
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    getItems()
      .then((items) => {
        setSavedArticles(items);
      })
      .catch(() => {
        setSavedArticles([]);
      });
  }, [isLoggedIn]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignIn={openLogin}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSaveArticle={handleSaveArticle}
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              isLoggedIn={isLoggedIn}
              onDelete={handleDeleteArticle}
            />
          }
        />
      </Routes>
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={openRegister}
        onLogin={handleLogin}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={openLogin}
        onRegister={handleRegister}
      />
    </>
  );
}

export default App;
