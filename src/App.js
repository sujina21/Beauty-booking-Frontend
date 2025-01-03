import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Home from './pages/homepage/Home';

import Bookings from './pages/bookings/Bookings';
import Book from './pages/booknow/Book';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Logout from './components/Logout'; // Import your Logout component
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import AdminPage from './pages/admin/AdminPage';
// import AddService from './pages/addservice/Addservice';


function App() {
  return ( 
    <Router>
      <ToastContainer></ToastContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path='/admin/dashboard' element={<AdminPage></AdminPage>}></Route>
        {/* <Route path="/addservice" element={<AddService/>} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
