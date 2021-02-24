import React from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <div className="navigations">
          <Link to="/game">Game</Link>
          <Link to="/questions">Questions</Link>
          <Link to="/highscore">High score</Link>
        </div>
        <div className="title">QuizApp</div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
