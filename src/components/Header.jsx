import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/saved-news">Saved Articles</Link>
      </nav>
    </header>
  );
}

export default Header;
