import './App.scss';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
