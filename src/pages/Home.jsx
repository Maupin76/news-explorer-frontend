// import SearchForm from "../components/SearchForm/SearchForm";
// import Main from "../components/Main/Main";

// function Home() {
//   return (
//     <main>
//       <SearchForm />
//       <Main />
//     </main>
//   );
// }

// export default Home;

import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Main from "../components/Main/Main";
import mockNewsCards from "../utils/MockNewsCard";

function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  function handleSearch(keyword) {
    setHasSearched(true);
    setIsLoading(true);

    setTimeout(() => {
      const trimmedKeyword = keyword.trim().toLowerCase();

      const filteredCards =
        trimmedKeyword === ""
          ? mockNewsCards
          : mockNewsCards.filter((card) =>
              card.title.toLowerCase().includes(trimmedKeyword),
            );

      setCards(filteredCards);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <Main hasSearched={hasSearched} isLoading={isLoading} cards={cards} />
    </>
  );
}

export default Home;
