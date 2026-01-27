import "./NothingFound.css";
import notFoundIcon from "../../assets/images/not-found_v1.svg";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img
        src={notFoundIcon}
        alt="Nothing found"
        className="nothing-found__image"
      />
      <h3 className="nothing-found__title">Nothing found</h3>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
