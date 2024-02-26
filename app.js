"use strict";

const menu = [
  {
    id: 1,
    title: "cheeseburger",
    category: "burger",
    price: 15.99,
    img: "./images/cheeseburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 2,
    title: "hamburger",
    category: "burger",
    price: 15.99,
    img: "./images/hamburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 3,
    title: "italianburger",
    category: "burger",
    price: 18.99,
    img: "./images/italianburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 4,
    title: "turkburger",
    category: "burger",
    price: 16.99,
    img: "./images/turkburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 5,
    title: "greekburger",
    category: "burger",
    price: 17.99,
    img: "./images/greekburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 6,
    title: "fries",
    category: "appetizer",
    price: 9.99,
    img: "./images/fries.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 7,
    title: "hot dog",
    category: "appetizer",
    price: 10.99,
    img: "./images/hotdog.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 8,
    title: "chicken",
    category: "appetizer",
    price: 12.99,
    img: "./images/chicken.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 9,
    title: "caprese salad",
    category: "salad",
    price: 12.99,
    img: "./images/capreseSalad.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 10,
    title: "greek salad",
    category: "salad",
    price: 11.99,
    img: "./images/greekSalad.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 11,
    title: "nonalcoholic drinks",
    category: "drink",
    price: 4.99,
    img: "./images/nonalcoholicDrinks.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 12,
    title: "beer",
    category: "drink",
    price: 6.99,
    img: "./images/beer.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
];

//sectionCenter in example
const menuItemsWrap = document.querySelector(".menuItemsWrap");

window.addEventListener("DOMContentLoaded", () => {
  displayNemu(menu);
});

const displayNemu = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menuItem">
    <img class="photo" src=${item.img} alt=${item.title}>
    <div class="itemInfo">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="itemText">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join(""); // because of "" do not get "," between articles
  menuItemsWrap.innerHTML = displayMenu;
};
