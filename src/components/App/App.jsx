import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authorize, checkToken } from "../../utils/auth";
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
  const [currentUser, setCurrentUser] = useState({ name: "Douglas" });
  const [savedArticles, setSavedArticles] = useState([]);

  function openLogin() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function openRegister() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  }

  function handleLogin(email, password) {
    authorize(email, password).then(({ token }) => {
      localStorage.setItem("token", token);

      checkToken(token).then(({ data }) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        setIsLoginOpen(false);
      });
    });
  }

  function handleSaveArticle(article) {
    saveArticle(article).then((saved) => {
      setSavedArticles((prev) => [...prev, saved]);
    });
  }

  function handleDeleteArticle(id) {
    deleteArticle(id).then(() => {
      setSavedArticles((prev) => prev.filter((item) => item._id !== id));
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
    const token = localStorage.getItem("token");

    if (token) {
      checkToken(token).then(({ data }) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignIn={openLogin}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home onSaveArticle={handleSaveArticle} isLoggedIn={isLoggedIn} />
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews savedArticles={savedArticles} isLoggedIn={isLoggedIn} />
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
      />
    </BrowserRouter>
  );
}

export default App;
