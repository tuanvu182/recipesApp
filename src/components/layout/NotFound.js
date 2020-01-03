import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <p className="notFound">Not found 404</p>
      <Link className="notFound__back" to="/">
        Go back to top
      </Link>
    </div>
  );
};

export default NotFound;
