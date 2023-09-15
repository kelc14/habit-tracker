import React from "react";
import "./Nav.css";

const GREETINGS = [
  "Welcome Back",
  "Keep it going",
  "Glad you're here",
  "Hello",
  "Way to Go",
];

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-welcome">
        {GREETINGS[Math.floor(Math.random() * GREETINGS.length)]}, User
      </div>
      <div className="Nav-logout">Logout</div>
    </div>
  );
};

export default Nav;
