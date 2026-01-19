import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SavedNews from "../../pages/SavedNews";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
