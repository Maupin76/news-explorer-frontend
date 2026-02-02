import mockSavedArticles from "../utils/MockSavedNews";
import NewsCardList from "../components/NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews() {
  const userName = "Douglas";
  const savedCount = mockSavedArticles.length;

  const uniqueKeywords = [
    ...new Set(mockSavedArticles.map((article) => article.keyword)),
  ];

  const firstTwoKeywords = uniqueKeywords.slice(0, 2);
  const remainingCount = uniqueKeywords.length - firstTwoKeywords.length;

  return (
    <main className="SavedNews">
      {/* HEADER SECTION */}
      <section className="SavedNews__header">
        <p className="SavedNews__label">Saved articles</p>

        <h1 className="SavedNews__title">
          {userName}, you have {savedCount} saved articles
        </h1>

        <p className="SavedNews__keywords">
          By keywords:{" "}
          <span className="SavedNews__keywords-bold">
            {firstTwoKeywords.join(", ")}
            {remainingCount > 0 && `, and ${remainingCount} other`}
          </span>
        </p>
      </section>

      <section className="SavedNews__cards">
        <NewsCardList cards={mockSavedArticles} variant="saved" isLoggedIn />
      </section>
    </main>
  );
}

export default SavedNews;
