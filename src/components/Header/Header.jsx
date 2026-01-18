import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/images/menu.png";
import closeIcon from "../../assets/images/close.png";

function Header({ isLoggedIn = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // 🔑 AUTO-CLOSE MENU WHEN LEAVING MOBILE
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 425 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isMenuOpen ? "header_open" : ""}`}>
        <div className="header__container">
          <Link to="/" className="header__logo">
            NewsExplorer
          </Link>

          {/* Mobile toggle (hamburger / X) */}
          <button
            className="header__menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu toggle" />
          </button>

          {/* Desktop / Tablet Nav */}
          <nav className="header__nav header__nav_desktop">
            <Link to="/" className="header__link">
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/saved-news" className="header__link">
                  Saved articles
                </Link>
                <button className="header__button">Elise ⏷</button>
              </>
            ) : (
              <button className="header__button">Sign in</button>
            )}
          </nav>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <nav className="header__nav header__nav_mobile">
            <Link to="/" className="header__link" onClick={toggleMenu}>
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/saved-news"
                  className="header__link"
                  onClick={toggleMenu}
                >
                  Saved articles
                </Link>
                <button className="header__button">Elise ⏷</button>
              </>
            ) : (
              <button className="header__button">Sign in</button>
            )}
          </nav>
        )}
      </header>

      {/* Overlay ONLY exists when mobile menu is open */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu} />}
    </>
  );
}

export default Header;
