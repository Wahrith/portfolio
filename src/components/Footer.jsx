import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p id="copyright">
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} {" "} {" "}
        by <span className="name">Warith Hameen </span>
        - All right reserved
      </p>
    </div>
  );
};

export default Footer;
