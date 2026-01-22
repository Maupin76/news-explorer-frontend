import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main className="main">
      <section className="main__intro">
        <h2 className="main__results-title">Search results</h2>

        <NewsCardList />
      </section>
      <About />
    </main>
  );
}

export default Main;
