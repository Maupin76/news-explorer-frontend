import "./NewsCard.css";

function NewsCard({ card }) {
  return (
    <article className="news-card">
      <button
        type="button"
        className="news-card__save-button"
        aria-label="Save article"
      />

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
