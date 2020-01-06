import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo">
          <img
            style={{ height: "100%", display: "inline-block" }}
            src="https://via.placeholder.com/200x100"
            alt="logo"
          ></img>
        </Link>

        <nav className="header__navbar">
          <ul>
            <li>
              <Link className="header__add" to="/recipe/add">
                Thêm món
              </Link>
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
