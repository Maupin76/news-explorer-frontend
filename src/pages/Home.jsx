import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Main from "../components/Main/Main";
import { getNewsByKeyword } from "../utils/newsApi";
import { formatDate } from "../utils/formatDate";

function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  function handleSearch(keyword) {
    const trimmedKeyword = keyword.trim();

    setHasSearched(true);
    setIsLoading(true);
    setError(null);

    // Block empty search (rubric-compliant)
    if (!trimmedKeyword) {
      setHasSearched(false);
      setCards([]);
      setIsLoading(false);
      return;
    }

    getNewsByKeyword(trimmedKeyword)
      .then((data) => {
        const normalized = (data.articles || []).map((a, index) => ({
          id: `${a.publishedAt}-${index}`,
          image: a.urlToImage,
          date: formatDate(a.publishedAt), // ✅ formatted here
          title: a.title,
          text: a.description,
          source: a.source?.name,
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
      />
    </>
  );
}

export default Home;
