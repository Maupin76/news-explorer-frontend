import { useEffect, useState } from "react";
import { getItems, deleteArticle } from "../utils/api";
import NewsCardList from "../components/NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedArticles, onDelete }) {
  // const [savedArticles, setSavedArticles] = useState([]);
  const userName = "Douglas";

  // useEffect(() => {
  //   getItems().then((items) => {
  //     setSavedArticles(items);
  //   });
  // }, []);

  // function handleDeleteArticle(id) {
  //   deleteArticle(id).then(() => {
  //     getItems().then((items) => {
  //       setSavedArticles(items);
  //     });
  //   });
  // }

  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];

  const firstTwoKeywords = uniqueKeywords.slice(0, 2);
  const remainingCount = uniqueKeywords.length - firstTwoKeywords.length;

  return (
    <main className="SavedNews">
      <section className="SavedNews__header">
        <p className="SavedNews__label">Saved articles</p>

        <h1 className="SavedNews__title">
          {userName}, you have {savedArticles.length} saved articles
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
