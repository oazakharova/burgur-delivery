import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyInfo">&copy; All Rights Reserved</div>
        <nav className="socialsWrap">
          <a href="#">
            <i className="fa-brands fa-facebook-f socialLink"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram socialLink"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter socialLink"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
