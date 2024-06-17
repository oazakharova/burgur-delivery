import React from "react";
import "./styles/style.scss";

import { Helmet } from "react-helmet";
import Header from "./components/Header";

import Slogan from "./components/Slogan";
import Menu from "./components/Menu";
import OurRestaurant from "./components/OurRestaurant";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <div className="App">
        <Header />
        <main className="main container">
          <Slogan />
          <Menu />
          <OurRestaurant />
          <OurTeam />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
