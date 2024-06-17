import React, { useState } from "react";
import { restaurantImages } from "../data";

const OurRestaurant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % restaurantImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + restaurantImages.length) % restaurantImages.length
    );
  };

  return (
    <section className="section ourRestaurantSection">
      <h2>
        <a name="ourRestaurant">our restaurant</a>
      </h2>
      <div className="underline"></div>
      <div className="slider-container ourRestaurantSliderWrap">
        {/* Отображаем текущее изображение на основе currentSlide */}
        <div className="slide">
          <img
            className="slideImg"
            src={restaurantImages[currentSlide].src}
            alt="restaurant photo"
          />
          <h3 className="title">{currentSlide + 1}</h3>
        </div>
      </div>
      <div className="btn-container ourRestaurantButtonContainer">
        <button className="prevBtn" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nextBtn" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <nav className="slider-nav">
        {/* Отображаем навигационные точки и добавляем обработчик клика */}
        {restaurantImages.map((_, index) => (
          <i
            key={index}
            className={`fa-circle ${
              index === currentSlide ? "fa-solid" : "fa-regular"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></i>
        ))}
      </nav>
    </section>
  );
};

export default OurRestaurant;
