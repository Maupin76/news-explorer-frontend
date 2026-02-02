import "./NewsCard.css";

function NewsCard({ card, variant = "home", isLoggedIn = false }) {
  return (
    <article
      className={`news-card ${variant === "saved" ? "news-card_alt-saved" : ""}`}
    >
      {/* HOME controls */}
      {variant === "home" && (
        <div className="news-card__save-wrapper">
          <button
            className="news-card__save-button"
            type="button"
            aria-label="Save article"
          />
          {!isLoggedIn && (
            <span className="news-card__hint">Sign in to save articles</span>
          )}
        </div>
      )}

      {/* SAVED controls */}
      {variant === "saved" && (
        <>
          <span className="news-card__keyword">{card.keyword}</span>

          <div className="news-card__delete-group">
            <span className="news-card__delete-label">Remove from saved</span>
            <button
              className="news-card__delete-button"
              type="button"
              aria-label="Remove from saved"
            />
          </div>
        </>
      )}

      {/* IMAGE */}
      <img src={card.image} alt={card.title} className="news-card__image" />

      {/* CONTENT */}
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
