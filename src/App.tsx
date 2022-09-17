import React from 'react';
import Nav from './Components/Navbar/Nav';
import Register from './Components/Register/Register';


import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
      <Nav />
      <Register />

      </div>
    
    <Footer />
    </div>
  );
}

export default App;
