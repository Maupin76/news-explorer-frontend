import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  cards,
  onSave,
  onDelete,
  isLoggedIn,
  variant = "home",
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <>
      <section className="news-card-list">
        {cards.slice(0, visibleCount).map((card) => (
          <NewsCard
            key={card.id || card._id}
            card={card}
            onSave={onSave}
            onDelete={onDelete}
            isLoggedIn={isLoggedIn}
            variant={variant}
          />
        ))}
      </section>

      {visibleCount < cards.length && (
        <button
          type="button"
          className="main__show-more"
          onClick={() => setVisibleCount((prev) => prev + 3)}
        >
          Show more
        </button>
      )}
    </>
  );
}

export default NewsCardList;
