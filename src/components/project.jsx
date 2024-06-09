import React from 'react';
import '../style/project.css';
import shopsmart from '../assets/shopsmart.jpg';
import chatapp from '../assets/chatapp.jpg';
import spv from '../assets/spv.jpg';
const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src={shopsmart} alt="eCommerce Website" />
          </div>
          <div className="card-content">
            <h5>eCommerce Website</h5>
            <p>Explore my MERN stack eCommerce project, featuring robust functionality with Postman REST API integration. Secure register/login authentication, SEO optimization, admin/user panels, CRUD operations, filters, cart functionality, and seamless payment gateway integration enhance user experience.
                
           <p> <a href="https://github.com/aparna03dubey/MERN-Ecommerce" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>

            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={spv} alt="Shortest Path Visualizer" />
          </div>
          <div className="card-content">
            <h5>Shortest Path Visualizer</h5>
            <p>Experience a shortest path visualizer project utilizing Dijkstra’s algorithm in JavaScript. Navigate user-created obstacles seamlessly through React JS props, ensuring efficient pathfinding. 
                
            <p> <a href="https://gorgeous-dasik-1fd5ac.netlify.app" target="_blank" rel="noopener noreferrer">Live link</a></p>

                </p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={chatapp} alt="Real Time Chat Application" />
          </div>
          <div className="card-content">
            <h5>Real Time Chat Application</h5>
            <p>Crafted with React's prowess, the project seamlessly orchestrates state management while ensuring real-time synchronization via Firebase's dynamic database. Experience secure, personalized chats with its robust authentication system, elevating user engagement to new heights.</p>
            <p> <a href="https://github.com/aparna03dubey/mychatapp" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;