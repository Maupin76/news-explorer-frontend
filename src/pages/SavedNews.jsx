// import { useEffect, useState } from "react";
// import { getItems, deleteArticle } from "../utils/api";
import NewsCardList from "../components/NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedArticles, onDelete }) {
  const userName = "Douglas";

  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];

  const firstTwoKeywords = uniqueKeywords.slice(0, 2);
  const remainingCount = uniqueKeywords.length - firstTwoKeywords.length;

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>

        <h1 className="saved-news__title">
          {userName}, you have {savedArticles.length} saved articles
        </h1>

        <p className="saved-news__keywords">
          By keywords:{" "}
          <span className="saved-news__keywords-bold">
            {firstTwoKeywords.join(", ")}
            {remainingCount > 0 && `, and ${remainingCount} other`}
          </span>
        </p>
      </section>

      <section className="saved-news__cards">
        <NewsCardList
          cards={savedArticles}
          variant="saved"
          isLoggedIn
          onDelete={onDelete}
        />
      </section>
    </main>
  );
}

export default SavedNews;
