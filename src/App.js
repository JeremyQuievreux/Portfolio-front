import './App.scss';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
