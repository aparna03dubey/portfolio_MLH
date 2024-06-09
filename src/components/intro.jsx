import React from "react";

import { ReactTyped as Typed } from 'react-typed';
import '../style/intro.css'

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
      

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Aparna Dubey</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Web Developer",
                      "Competitive Programmer",
                      "Open Source Contributor",
                      "Aspiring Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop></Typed>
                  
                </strong>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
