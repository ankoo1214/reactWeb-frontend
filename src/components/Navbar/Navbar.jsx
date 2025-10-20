import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeBtn, setactiveBtn] = useState("Home");

  const handleBtn = (buttonName) => {
    setactiveBtn(buttonName);
    localStorage.setItem("activeBtn", buttonName);
  };
  useEffect(() => {
    const savedActiveBtn = localStorage.getItem("activeBtn");
    if (savedActiveBtn) {
      setactiveBtn(savedActiveBtn);
    }
  }, []);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navBar">
      <div class="container-fluid px-2">
        <div className="title">
          <h2 class="fs-1 primary-text" href="#">
            NaiveHub <span className="pulse"> Solutions</span>
          </h2>
          <p className="primary-text sub-title">
            Driving Innovation, Shaping the Future
          </p>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bar" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-6 line">
            <li class="nav-item">
              <Link
                class={`text-decoration-none primary-text fs-5 fw-medium listItems ${
                  activeBtn === "Home" ? "active" : ""
                }`}
                onClick={() => handleBtn("Home")}
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                to={"/portfolio"}
                onClick={() => handleBtn("Projects")}
                class={`fs-5 fw-medium primary-text text-decoration-none listItems ${
                  activeBtn === "Projects" ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to={"/team"}
                className={`primary-text disabled fs-5 fw-medium text-decoration-none listItems  ${
                  activeBtn === "Team" ? "active" : ""
                }`}
                aria-disabled="true"
                onClick={() => handleBtn("Team")}
              >
                Team
              </Link>
            </li>
          </ul>
          <div class="d-flex discussBtn" role="search">
            <Link to={"/form"}>
              <button
                class="btn navBtn fs-5 text-center fw-medium rounded-5 px-3"
                type="submit"
                onClick={() => handleBtn("")}
              >
                Discuss Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
