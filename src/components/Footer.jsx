import React from "react";
import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        Your footer here. Created for example/CSS showcase. More can be found
        here:
      </div>
      <a href="https://github.com/pmcmahan1" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/patrick-mcmahan-736a42234/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="icon" />
      </a>
      <a href="https://pmcmahan1.github.io/portfolio-site/" target="_blank" rel="noopener noreferrer">
        <ContactPageIcon className="icon" />
      </a>
    </div>
  );
};

export default Footer;
