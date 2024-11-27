import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Slide, Fade } from "react-reveal";

import { skills } from "../data/skills";
import "./About.css";

const About = () => {
  return (
    <div className="container about-container" id="about">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />

      <h4>About me</h4>
      <Slide left>
        <h1>Hey There!</h1>
      </Slide>

      <Slide up>
        <p>
        My name is Warith Hameen. A dedicated front-end software engineer with a strong focus on creating seamless and efficient user interfaces. I excel at turning complex ideas into dynamic web applications, with a passion for clean code and a keen eye for detail. I consistently deliver high-quality digital solutions that enhance user experience. I thrive in collaborative environments and stay committed to keeping up with the latest industry trends.
        </p>
      </Slide>

      <div className="skills-container">
        <FontAwesomeIcon icon={faCogs} className="skill-cogs" />
        <Fade left duration={2000}>
          <h3>I currently work with</h3>
        </Fade>
        <Fade down duration={4000}>
          <hr></hr>
        </Fade>
        <Fade right>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill.id} id={skill.id}>
                {skill.label}
              </span>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
