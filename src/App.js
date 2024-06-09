import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Preloader from './preloadr';
import Project from './components/project';
function App() {
  
  return (
    <div className="App">
      <Preloader/>
      <Navbar/>
      <Intro/>
   <About/>
   <Project id="projects" />
      <Contact/>
    </div>
  );
}

export default App;
