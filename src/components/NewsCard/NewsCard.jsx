import "./NewsCard.css";

function NewsCard({
  card,
  savedArticles = [],
  onSave,
  onDelete,
  isLoggedIn,
  variant = "home",
}) {
  const isSaved = savedArticles?.some((saved) => saved.title === card.title);

  return (
    <article className="news-card">
      {/* HOME MODE */}
      {variant === "home" && (
        <div className="news-card__save-wrapper">
          <button
            className={`news-card__save-button ${
              isSaved ? "news-card__save-button_saved" : ""
            }`}
            type="button"
            aria-label={isSaved ? "Article saved" : "Save article"}
            disabled={isSaved}
            onClick={() => {
              if (!isSaved) {
                onSave(card);
              }
            }}
          />

          {!isLoggedIn && (
            <span className="news-card__hint">Sign in to save articles</span>
          )}
        </div>
      )}

      {/* SAVED MODE */}
      {variant === "saved" && (
        <>
          <span className="news-card__keyword">{card.keyword}</span>

          <div className="news-card__delete-group">
            <span className="news-card__delete-label">Remove from saved</span>
            <button
              className="news-card__delete-button"
              type="button"
              aria-label="Remove from saved"
              onClick={() => onDelete(card._id)}
            />
          </div>
        </>
      )}

      <img src={card.image} alt={card.title} className="news-card__image" />

      <div className="news-card__content">
        <p className="news-card__date">{card.date}</p>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__text">{card.text}</p>
        <p className="news-card__source">{card.source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
