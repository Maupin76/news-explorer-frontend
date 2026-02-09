import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";
import logoutIcon from "../../assets/images/logout-white.svg";

function Header({ isLoggedIn = false, currentUser, onSignIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

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
                <button
                  className="header__button"
                  type="button"
                  onClick={onLogout}
                >
                  <span className="header__username">{currentUser?.name}</span>
                  <img
                    src={logoutIcon}
                    alt="Log out"
                    className="header__logout-icon"
                  />
                </button>
              </>
            ) : (
              <button
                type="button"
                className="header__button"
                onClick={onSignIn}
              >
                Sign in
              </button>
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
                <button
                  className="header__button"
                  type="button"
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="header__username">{currentUser?.name}</span>
                  <img
                    src={logoutIcon}
                    alt="Log out"
                    className="header__logout-icon"
                  />
                </button>
              </>
            ) : (
              <button
                type="button"
                className="header__button"
                onClick={() => {
                  onSignIn();
                  setIsMenuOpen(false);
                }}
              >
                Sign in
              </button>
            )}
          </nav>
        )}
      </header>

      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu} />}
    </>
  );
}

export default Header;
