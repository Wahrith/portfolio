import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
   faLinkedin,
   faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.css";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div className="container contacts-container" id="contact">
      <FontAwesomeIcon icon={faMailBulk} className="bg-icon" />
      <h4>Contact me</h4>
      <Jump duration={5000}><h2 >Want to say hi?</h2></Jump>

      <Fade left duration={2000}>
      <div className="social-btn-container" >
        <div className="social-btns">

          <a href="mailto:warithtimi01@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-btn whatsapp-icon"
            />


          </a>
          <a href="https://www.linkedin.com/in/warith-hameen-663141237/" target="_blank"  rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-btn whatsapp-icon"
            />
            </a>
          <a href="https://github.com/Wahrith" target="_blank"  rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="social-btn whatsapp-icon"
            />
            </a>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Contact;
