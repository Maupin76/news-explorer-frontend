import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  hasSearched,
  isLoading,
  cards,
  error,
  onSaveArticle,
  savedArticles,
  isLoggedIn,
}) {
  return (
    <main className="main">
      {hasSearched && (
        <section className="main__results">
          <h2 className="main__results-title">Search results</h2>

          {isLoading && <Preloader />}

          {!isLoading && error && (
            <p className="main__error">
              Sorry, something went wrong during the request.
            </p>
          )}

          {!isLoading && !error && cards.length > 0 && (
            <NewsCardList
              cards={cards}
              onSave={onSaveArticle}
              savedArticles={savedArticles}
              isLoggedIn={isLoggedIn}
            />
          )}

          {!isLoading && !error && cards.length === 0 && <NothingFound />}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
