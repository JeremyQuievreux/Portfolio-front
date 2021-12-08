//style
import './App.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//composants
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Admin from './Admin/Admin';
import ErrorPage from './ErrorPage/ErrorPage';
import RoadMap from './RoadMap/RoadMap';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            </>
          }/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/road" element={<RoadMap/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//test admin-feature branch