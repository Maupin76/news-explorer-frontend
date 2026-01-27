// import "./Main.css";
// import About from "../About/About";
// import NewsCardList from "../NewsCardList/NewsCardList";

// function Main() {
//   return (
//     <main className="main">
//       <section className="main__intro">
//         <h2 className="main__results-title">Search results</h2>

//         <NewsCardList />
//       </section>
//       <About />
//     </main>
//   );
// }

// export default Main;

import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({ hasSearched, isLoading, cards }) {
  return (
    <main className="main">
      {hasSearched && (
        <section className="main__results">
          <h2 className="main__results-title">Search results</h2>

          {isLoading && <Preloader />}

          {!isLoading && cards.length > 0 && <NewsCardList cards={cards} />}

          {!isLoading && cards.length === 0 && <NothingFound />}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
