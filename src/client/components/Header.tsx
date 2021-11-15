import React from "react";
import { BsChatFill } from "react-icons/bs";

const Header = ({ account }) => {
  return (
    <>
      <header className="heading d-flex flex-column justify-content-start align-items-start ">
        <h1 className="chirp-title">
          Chirper{" "}
          <span className="logo-icon">
            <BsChatFill />
          </span>
        </h1>
      </header>
      <div className="sub-header d-flex justify-content-start align-items-start ">
        <a href="#" className="timeline sub-heading-link">
          Home
        </a>

        <a href="#" className="account sub-heading-link">
          Signed in as: <span className="sign-in-highlight">{account}</span>
        </a>

        <a href="#" className="credits sub-heading-link">
          Credits
        </a>
      </div>
    </>
  );
};

export default Header;
