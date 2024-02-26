"use strict";

const menu = [
  {
    id: 1,
    title: "cheeseburger",
    category: "burgers",
    price: 15.99,
    img: "./images/cheeseburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 2,
    title: "hamburger",
    category: "burgers",
    price: 15.99,
    img: "./images/hamburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 3,
    title: "italianburger",
    category: "burgers",
    price: 18.99,
    img: "./images/italianburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 4,
    title: "turkburger",
    category: "burgers",
    price: 16.99,
    img: "./images/turkburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 5,
    title: "greekburger",
    category: "burgers",
    price: 17.99,
    img: "./images/greekburger.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 6,
    title: "fries",
    category: "appetizers",
    price: 9.99,
    img: "./images/fries.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 7,
    title: "hot dog",
    category: "appetizers",
    price: 10.99,
    img: "./images/hotdog.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 8,
    title: "chicken",
    category: "appetizers",
    price: 12.99,
    img: "./images/chicken.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 9,
    title: "caprese salad",
    category: "salads",
    price: 12.99,
    img: "./images/capreseSalad.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 10,
    title: "greek salad",
    category: "salads",
    price: 11.99,
    img: "./images/greekSalad.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 11,
    title: "nonalcoholic drinks",
    category: "drinks",
    price: 4.99,
    img: "./images/nonalcoholicDrinks.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
  {
    id: 12,
    title: "beer",
    category: "drinks",
    price: 6.99,
    img: "./images/beer.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis repellat dicta earum beatae! Nihil.",
  },
];

const menuItemsWrap = document.querySelector(".menuItemsWrap");
const buttonsWrap = document.querySelector(".buttonsWrap");

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayMenuButtons();
});

const displayMenu = (menuItems) => {
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

const displayMenuButtons = () => {
  // const categories = menu.map((item) => item.category); // to get all categories
  // to get unique categories:
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryButtons = categories
    .map((category) => {
      return `<button class="filterButton" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  buttonsWrap.innerHTML = categoryButtons;

  const filterButtons = document.querySelectorAll(".filterButton");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
      e.currentTarget.classList.add("selectedFilterButton");
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.currentTarget.classList.add("selectedFilterButton");
      filterButtons.forEach((element) => {
        if (element !== e.currentTarget) {
          element.classList.remove("selectedFilterButton");
        }
      });
    });
  });
};
