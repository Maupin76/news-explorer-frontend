import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import SavedNews from "../../pages/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsLoginOpen(false);
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <BrowserRouter>
      <Header onSignIn={() => setIsLoginOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </BrowserRouter>
  );
}

export default App;
