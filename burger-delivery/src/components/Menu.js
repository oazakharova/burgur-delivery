import React, { useState } from "react";
import { menu } from "../data";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(menu);

  const filterMenu = (category) => {
    if (category === "all") {
      setDisplayMenu(menu);
    } else {
      setDisplayMenu(menu.filter((item) => item.category === category));
    }
  };

  const sortMenu = (order) => {
    const sortedMenu = [...displayMenu].sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    setDisplayMenu(sortedMenu);
  };

  return (
    <section className="section menuSection">
      <h2>
        <a name="menu">menu</a>
      </h2>
      <div className="underline"></div>
      <div className="buttonsWrap">
        <button className="filterButton" onClick={() => filterMenu("all")}>
          all
        </button>
        <button className="filterButton" onClick={() => filterMenu("burgers")}>
          burgers
        </button>
        <button
          className="filterButton"
          onClick={() => filterMenu("appetizers")}
        >
          appetizers
        </button>
        <button className="filterButton" onClick={() => filterMenu("salads")}>
          salads
        </button>
        <button className="filterButton" onClick={() => filterMenu("drinks")}>
          drinks
        </button>
      </div>
      <div className="sortWrap">
        <button
          className="filterButton lowToHighPriceButton"
          onClick={() => sortMenu("lowToHigh")}
        >
          <span>low to high</span>
          <i className="fa-solid fa-arrow-up-wide-short"></i>
        </button>
        <button
          className="filterButton highToLowPriceButton"
          onClick={() => sortMenu("highToLow")}
        >
          <span>high to low</span>
          <i className="fa-solid fa-arrow-down-wide-short"></i>
        </button>
      </div>
      <div className="menuItemsWrap">
        {displayMenu.map((item) => (
          <article key={item.id} className="menuItem">
            <img className="photo" src={item.img} alt={item.title} />
            <div className="itemInfo">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
