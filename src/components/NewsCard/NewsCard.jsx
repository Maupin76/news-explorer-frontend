import "./NewsCard.css";

function NewsCard({ card, isLoggedIn = false }) {
  return (
    <article className="news-card">
      <div className="news-card__save-wrapper">
        <button
          className="news-card__save-button"
          type="button"
          aria-label="Save article"
        />

        {!isLoggedIn && (
          <span className="news-card__tooltip">Sign in to save articles</span>
        )}
      </div>

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
