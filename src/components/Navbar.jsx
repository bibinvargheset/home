import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pdf from "../editable-stuff/resume.pdf";
import { showBlog, FirstName } from "../editable-stuff/configurations.json";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
      } `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${FirstName} />`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {showBlog && (
            <li className="nav-item">
              <Link
                className="nav-link lead"
                to={process.env.PUBLIC_URL + "/blog"}
              >
                Blog
              </Link>
            </li>
          )}
<<<<<<< HEAD
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
=======
		  
		  
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#experience"}
          >
            Career
          </Nav.Link>
		  
		  {/*
		  <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#projecttimeline"}
          >
            Projects
          </Nav.Link>*/}
		  
		  
          <Nav.Link
            className="nav-link lead"
            href={Pdf}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#aboutme"}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#skills"}
          >
            Skills
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
>>>>>>> 5139c6b... timeline
  );
};

export default Navbar;
