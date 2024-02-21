"use client";

import React, { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";
import FeaturedEvent from "./FeaturedEvent";

const FeaturedItems = ({ headline, items, itemType = "article" }) => {
  const [itemNumber, setItemNumber] = useState(3);
  return (
    <section className="feature-items">
      <h3 className="feature-items__headline">
        {headline || "Our featured articles"}
      </h3>
      <div className="feature-items__container">
        {items.map((item) => {
          return <FeaturedArticle key={item.slug} article={item} />;
        })}
        {/* {items.slice(0, itemNumber).map((item) => {
          if (itemType === "article") {
            return <FeaturedArticle key={item.slug} article={item} />;
          } else {
            return <FeaturedEvent key={item.id} event={item} />;
          }
        })} */}
        {itemNumber < itemNumber.length && (
          <button
            className="btn btn--medium btn--turquoise "
            onClick={() => setItemNumber(itemNumber + 3)}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedItems;
