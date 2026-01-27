import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword);
  }

  return (
    <section className="search">
      <div className="search__container">
        <h1 className="search__title">What's going on in the world?</h1>

        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Enter topic"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
