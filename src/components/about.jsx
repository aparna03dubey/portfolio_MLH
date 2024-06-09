import React from "react";
import '../style/about.css';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5 & CSS3", porcentage: "80%", value: 80 },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: 90 },
        { id: "PHP_skill", content: "C++", porcentage: "80%", value: 80 },
        { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: 80 },
        { id: "Python_skill", content: "Python", porcentage: "70%", value: 70 },
        { id: "CSS3_skill", content: "Firebase", porcentage: "75%", value: 75 },
        { id: "VanillaJS_skill", content: "Node.js", porcentage: "80%", value: 80 },
        { id: "Wordpress_skill", content: "MongoDB", porcentage: "80%", value: 80 }
      ],
      about_me: [
        {
          id: "first-p-about",
          content: "Hello! I'm Aparna Dubey, a fourth-year undergraduate student at IIT BHU, Varanasi. I'm deeply passionate about various aspects of computer science, particularly web development, competitive programming, data structures and algorithms, machine learning, and open source contributions. In my journey so far, I've actively engaged in expanding my skills and experiences. I'm proud to have successfully completed Hacktoberfest in both 2023 and 2024, contributing to the open-source community. Additionally, I had the privilege of interning at SPARK, IIT Roorkee, where I gained valuable insights as a research intern."
        },
        {
          id: "second-p-about",
          content: "As an active member of the technical team at MetSoc, IIT BHU, I've been involved in various technical initiatives and projects. I find joy in competitive programming and have solved over 800 problems on platforms like Codeforces and CodeChef. Serving as the technical head for Anveshan, the departmental fest of Metallurgical Engineering, IIT BHU, has been a fulfilling experience where I've honed my leadership and organizational skills."
        },
        {
          id: "third-p-about",
          content: "Looking ahead, my ultimate aspiration is to become a software engineer, leveraging my skills and knowledge to create impactful solutions that address real-world challenges. I'm excited about the endless possibilities in the field of technology and am eager to continue learning and growing in this dynamic industry."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">
                            {skill.porcentage}
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
