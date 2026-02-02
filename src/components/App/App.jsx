import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import SavedNews from "../../pages/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function openLogin() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function openRegister() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
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

  return (
    <BrowserRouter>
      <Header onSignIn={openLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={openRegister}
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
