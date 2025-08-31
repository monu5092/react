import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Course_Deatil from './pages/Course_Deatil';
import Navbar from './pages/Navbar'; import Dash_Board from './pages/DashBoard';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Product />} />
        <Route path="/courses/:id" element={<Course_Deatil />} /> 
        <Route path="/dashboard" element={Dash_Board}/>
        <Route path="/profile" element={Profile}/>
      </Routes>
    </Router>
  );
}

export default App;


//<Route path="/courses/:id" element={<Product />} />  => {:id} sign of the dynamic routing 