import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("darkTheme");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("darkTheme");
  };

  return (
    <div className="themeToggleWrap">
      <button className="toggleThemeBtn" onClick={toggleTheme}>
        <i className="fa-regular fa-lightbulb"></i> change theme
      </button>
    </div>
  );
};

export default ThemeToggle;
