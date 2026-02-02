import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(keyword);
  }

  function handleChange(e) {
    setKeyword(e.target.value);

    // Clear error as soon as user starts typing
    if (error) {
      setError("");
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <h1 className="search__title">What&apos;s going on in the world?</h1>

        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className={`search__input ${error ? "search__input_error" : ""}`}
            placeholder="Enter topic"
            value={keyword}
            onChange={handleChange}
            aria-label="Search topic"
            aria-invalid={!!error}
            aria-describedby={error ? "search-error" : undefined}
          />

          <button type="submit" className="search__button">
            Search
          </button>
        </form>

        {error && (
          <span id="search-error" className="search__error">
            {error}
          </span>
        )}
      </div>
    </section>
  );
}

export default SearchForm;
