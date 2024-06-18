import Home from '../pages/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {Routes, Route} from 'react-router-dom';



function Routers() {
  return  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctordetails" element={<DoctorDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>

};

export default Routers;