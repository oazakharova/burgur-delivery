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

const ourTeam = [
  {
    id: 1,
    fullName: "samantha smith",
    job: "the chef",
    img: "./images/portrait-beautiful-young-woman-standing-grey-wall.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
  {
    id: 2,
    fullName: "bill anderson",
    job: "sous chef",
    img: "./images/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
  {
    id: 3,
    fullName: "anna johnson",
    job: "administrator",
    img: "./images/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
  {
    id: 4,
    fullName: "susan terner",
    job: "waiter",
    img: "./images/indoor-portrait-stylish-teenag-girl-with-freckles-red-hair-bun-looking-camera-with-cheerful-smile.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
  {
    id: 5,
    fullName: "alex rodridez",
    job: "waiter",
    img: "./images/confident-bearded-macho-man-looks-pleased-has-friendly-kind-grin-face-wears-round-spectacles-pink-jumper.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
  {
    id: 6,
    fullName: "carmen rodridez",
    job: "barista",
    img: "./images/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident laboriosam dolorem sunt dolor",
  },
];

// menu variables
const menuItemsWrap = document.querySelector(".menuItemsWrap");
const buttonsWrap = document.querySelector(".buttonsWrap");

// team variables
const ourTeamSection = document.querySelector(".ourTeamSection");
const img = ourTeamSection.querySelector(".ourTeamImg");
const author = ourTeamSection.querySelector(".ourTeamUserName");
const job = ourTeamSection.querySelector(".ourTeamJob");
const info = ourTeamSection.querySelector(".ourTeamDesc");

const prevBtn = ourTeamSection.querySelector(".prevBtn");
const nextBtn = ourTeamSection.querySelector(".nextBtn");

let currentTeamItem = 0;

// slider variables
const slides = document.querySelectorAll(".slide");
const prevBtnInSlider = document
  .querySelector(".ourRestaurantSection")
  .querySelector(".prevBtn");
const nextBtnInSlider = document
  .querySelector(".ourRestaurantSection")
  .querySelector(".nextBtn");
const sliderNav = document.querySelector(".slider-nav");
const navPoints = sliderNav.querySelectorAll("i");

let counterInSlider = 0;

//  DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  // menu
  displayMenu(menu);
  displayMenuButtons();

  // team
  showEmployee();

  // slider
  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

  nextBtnInSlider.addEventListener("click", () => {
    counterInSlider++;
    carousel();
  });
  prevBtnInSlider.addEventListener("click", () => {
    counterInSlider--;
    carousel();
  });

  navPoints.forEach((navPoint, index) => {
    navPoint.addEventListener("click", () => {
      counterInSlider = index;

      if (!navPoint.classList.contains("fa-solid")) {
        navPoint.classList.add("fa-solid");

        if (navPoint.classList.contains("fa-regular")) {
          navPoint.classList.remove("fa-regular");
        }
      }

      navPoints.forEach((btn) => {
        if (btn !== navPoint) {
          btn.className = "";
          btn.classList.add("fa-circle");
          btn.classList.add("fa-regular");
        }
      });

      carousel();
    });
  });
});

// menu functions
const displayMenu = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menuItem">
    <img class="photo" src=${item.img} alt=${item.title}>
    <div class="itemInfo">
      <header>
        <h4 class="itemTitle">${item.title}</h4>
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

// team functions
const showEmployee = () => {
  const itemTeam = ourTeam[currentTeamItem];
  img.src = itemTeam.img;
  author.textContent = itemTeam.fullName;
  job.textContent = itemTeam.job;
  info.textContent = itemTeam.text;
};

nextBtn.addEventListener("click", () => {
  currentTeamItem++;
  if (currentTeamItem > ourTeam.length - 1) {
    currentTeamItem = 0;
  }
  showEmployee();
});

prevBtn.addEventListener("click", () => {
  currentTeamItem--;
  if (currentTeamItem < 0) {
    currentTeamItem = ourTeam.length - 1;
  }
  showEmployee();
});

// slider functions
// buttons prev and next in slider
function carousel() {
  if (counterInSlider === slides.length) counterInSlider = 0;
  if (counterInSlider < 0) counterInSlider = slides.length - 1;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counterInSlider * 100}%)`;
  });
}
