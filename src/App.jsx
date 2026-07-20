import Footer from './elements/Footer.jsx';
import './index.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { GuitarPage } from './pages/GuitarPage.jsx';
import { Amppage } from './pages/Amppage.jsx';
import { CoursePage } from './pages/CoursePage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/GuitarPage" element= {<GuitarPage/>}/>
        <Route path = "/Login" element= {<Login/>}/>
        <Route path = "/Amppage" element= {<Amppage/>}/>
        <Route path = "/CoursePage" element= {<CoursePage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App; 
