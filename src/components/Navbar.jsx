import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../Styles/Navbar.css";
function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);
  return (
    <div className="nav-container py-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item" onClick={() => setActiveSection("hero")}>
                <a
                  className={
                    activeSection === "hero" ? "nav-link active" : "nav-link"
                  }
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveSection("services")}
              >
                <a
                  className={
                    activeSection === "services"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveSection("about")}
              >
                <a
                  className={
                    activeSection === "about" ? "nav-link active" : "nav-link"
                  }
                  href="#about"
                >
                  About
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveSection("pricing")}
              >
                <a
                  className={
                    activeSection === "pricing" ? "nav-link active" : "nav-link"
                  }
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveSection("ourteam")}
              >
                <a
                  className={
                    activeSection === "ourteam" ? "nav-link active" : "nav-link"
                  }
                  href="#ourteam"
                >
                  Our Team
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setActiveSection("contact")}
              >
                <a
                  className={
                    activeSection === "contact" ? "nav-link active" : "nav-link"
                  }
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">Get Started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
