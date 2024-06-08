import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="logo" href="/">
            burgur club
          </a>
          <nav className="nav">
            <a className="anchor" href="#menu">
              menu
            </a>
            <a className="anchor" href="#ourRestaurant">
              our restaurant
            </a>
            <a className="anchor" href="#ourTeam">
              our team
            </a>
          </nav>
        </div>
      </header>
      <ThemeToggle />
    </>
  );
};

export default Header;
