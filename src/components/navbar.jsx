import React, { Component } from "react";
import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";
import '../style/navbar.css'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
  
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }

    const navHeight = nav.offsetHeight;

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (navLink) {
          navLink.classList.add("active");
        }
      } else {
        const id = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (navLink) {
          navLink.classList.remove("active");
        }
      }
    });
  };

  scrollTo = (id) => {
    const navHeight = document.querySelector("nav").offsetHeight;
    const element = document.getElementById(id);
    const position = element.offsetTop - navHeight + 5;
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            {/* <img src={this.state.logo} alt="logo" style={{ maxWidth: "100px" }} /> */}
          </a>
         
        
        
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="nav-item">
                <button className="nav-link js-scroll active" onClick={() => this.scrollTo("home")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link js-scroll" onClick={() => this.scrollTo("about")}>
                  About
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link js-scroll" onClick={() => this.scrollTo("projects")}>
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link js-scroll" onClick={() => this.scrollTo("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;