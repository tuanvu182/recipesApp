import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="/">
          <img
            style={{ height: "100%", display: "inline-block" }}
            src="https://via.placeholder.com/200x100"
            alt="logo"
          ></img>
        </a>

        <nav className="header__navbar">
          <ul>
            <li>
              <button>Thêm món</button>
            </li>
            <li>
              <button>Random</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
