import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

import image1 from "../../assets/images/card-1.png";
import image2 from "../../assets/images/card-2.png";
import image3 from "../../assets/images/card-3.png";
import image4 from "../../assets/images/card-4.png";
import image5 from "../../assets/images/card-5.png";

function NewsCardList() {
  const cards = [
    {
      id: 1,
      image: image1,
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
      source: "TREEHUGGER",
    },
    {
      id: 2,
      image: image2,
      date: "February 19, 2019",
      title: "Nature Makes You Better",
      text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves...",
      source: "NATIONAL GEOGRAPHIC",
    },
    {
      id: 3,
      image: image3,
      date: "October 19, 2020",
      title: "Grand Teton Renews Historic Crest Trail",
      text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
      source: "THE GUARDIAN",
    },
    {
      id: 4,
      image: image4,
      date: "March 12, 2021",
      title: "Why Forest Bathing Is Good for You",
      text: "Spending time in forests...",
      source: "BBC",
    },
    {
      id: 5,
      image: image5,
      date: "June 5, 2022",
      title: "Urban Parks Improve Mental Health",
      text: "Studies show that green spaces...",
      source: "SCIENTIFIC AMERICAN",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(cards.length);
  };

  return (
    <>
      <section className="news-card-list">
        {cards.slice(0, visibleCount).map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </section>

      {visibleCount < cards.length && (
        <button
          type="button"
          className="main__show-more"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </>
  );
}

export default NewsCardList;
