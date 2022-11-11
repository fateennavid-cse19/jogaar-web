import React from 'react';
import Nav from './Components/Navbar/Nav';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import home_pic from "./Images/home.png";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Profile from './Profile/Profile';
import CreateCamp from './Components/Create-Campaign/CreateCamp';
import View_All from './Components/View_All/View_All';
import Profile_Public from './Components/Profile-Public/Profile-Public';
import Edit from "./Components/Edit_Account/Edit";

import './App.css';
import Footer from './Components/Footer/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <Nav />
        <div className='content-wrap'>
          <Routes>
            <Route path='/' element={<Home imageSrc={home_pic} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/create-campaign' element={<CreateCamp />}></Route>
            <Route path='/view-user-campaigns' element={<View_All />}></Route>
            <Route path='profile/public' element={<Profile_Public />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
          </Routes>
          

        </div>
    
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
