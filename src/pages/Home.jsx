import { useState } from "react";
import { getNewsByKeyword } from "../utils/newsApi";
import { formatDate } from "../utils/formatDate";

import SearchForm from "../components/SearchForm/SearchForm";
import Main from "../components/Main/Main";

function Home({ isLoggedIn, savedArticles, onSaveArticle }) {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  function handleSaveArticle(card) {
    const articleToSave = {
      ...card,
      keyword: searchKeyword,
    };

    onSaveArticle(articleToSave);
  }

  function handleSearch(keyword) {
    const trimmedKeyword = keyword.trim();
    setSearchKeyword(trimmedKeyword);

    setHasSearched(true);
    setIsLoading(true);
    setError(null);

    if (!trimmedKeyword) {
      setHasSearched(false);
      setCards([]);
      setIsLoading(false);
      return;
    }

    getNewsByKeyword(trimmedKeyword)
      .then((data) => {
        const normalized = (data || []).map((a, index) => ({
          id: `${a.publishedAt}-${index}`,
          image: a.urlToImage,
          date: formatDate(a.publishedAt),
          title: a.title,
          text: a.description,
          source: a.source?.name,
          url: a.url,
        }));

        setCards(normalized);
      })
      .catch(() => {
        setCards([]);
        setError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <Main
        hasSearched={hasSearched}
        isLoading={isLoading}
        cards={cards}
        error={error}
        savedArticles={savedArticles}
        onSaveArticle={handleSaveArticle}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default Home;
