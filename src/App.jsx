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
import Edit from "./Components/Edit_Account/Edit";
import EditCamp from "./Components/Edit-Campaign/EditCamp"
import DeleteCamp from './Components/Delete-Campaign/DeleteCamp';
import FindUser from './Components/Find-user/FindUser';
import Profile_Public from "./Components/Profile_Public/Profile_Public"
import Public_View_All from './Components/Public_View_All/Public_View_All';
import Camp_Find from './Components/Campaign_Find/Camp_Find';
import Camp_View from './Components/Camp_View/Camp_View';
import Camp_View_Pledger from './Components/Camp_View_Pledger/Camp_View_Pledger';
import CreateFAQ from './Components/Create-FAQ/CreateFAQ';
import CreateMilestone from './Components/Create-Milestone/CreateMilestone';
import CreateRewards from './Components/Create-Rewards/CreateRewards';
import Report from './Components/Report/Report';
import View_All_Report from './Components/View_All_Report/View_All_Report';
import View_All_Milestone from './Components/View_All_Milestone/View_All._Milestone';
import View_All_Reward from './Components/View_All_Rewards/View_All._Reward';
import View_All_FAQ from './Components/View_All_FAQ/View_All._FAQ';
import EditMilestone from './Components/Edit-Milestone/EditMilestone';
import EditRewards from './Components/Edit-Rewards/EditRewards';
import EditFAQ from './Components/Edit-FAQ/EditFAQ';
import DeleteMilestone from './Components/Delete-Milestone/DeleteMilestone';
import DeleteRewards from './Components/Delete-Rewards/DeleteRewards';
import DeleteFAQ from './Components/Delete-FAQ/DeleteFAQ';
import Create_Tag from './Components/Create_Tag/Create_Tag';
import EditTag from './Components/Edit-Tag/EditTag';
import DeleteTag from './Components/Delete-Tag/DeleteTag';

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
            <Route path='/edit' element={<Edit />}></Route>
            <Route path='/edit-campaign' element={<EditCamp />}></Route>
            <Route path='/delete-campaign' element={<DeleteCamp />}></Route>
            <Route path='/find-user' element={<FindUser />}></Route>
            <Route path='/profile/public' element= {<Profile_Public />}></Route>
            <Route path='/view-public-campaigns' element= {<Public_View_All />}></Route>
            <Route path='/find-campaign' element= {<Camp_Find />}></Route>
            <Route path='/view-campaign' element= {<Camp_View />}></Route>
            <Route path='/view-campaign-pledger' element= {<Camp_View_Pledger />}></Route>
            <Route path='/create-faq' element= {<CreateFAQ />}></Route>
            <Route path='/view-faq' element= {<View_All_FAQ />}></Route>
            <Route path='/create-milestone' element= {<CreateMilestone />}></Route>
            <Route path='/view-milestone' element= {<View_All_Milestone />}></Route>
            <Route path='/view-reward' element= {<View_All_Reward />}></Route>
            <Route path='/create-reward' element= {<CreateRewards />}></Route>
            <Route path='/report' element= {<Report />}></Route>
            <Route path='/view-reports' element= {<View_All_Report />}></Route>
            <Route path='/edit-milestone' element={<EditMilestone />}></Route>
            <Route path='/edit-reward' element={<EditRewards />}></Route>
            <Route path='/edit-faq' element={<EditFAQ />}></Route>
            <Route path='/delete-milestone' element={<DeleteMilestone />}></Route>
            <Route path='/delete-reward' element={<DeleteRewards />}></Route>
            <Route path='/delete-faq' element={<DeleteFAQ />}></Route>
            <Route path='/tag-customization' element={<Create_Tag />}></Route>
            <Route path='/edit-tag' element={<EditTag />}></Route>
            <Route path='/delete-tag' element={<DeleteTag />}></Route>

            
          </Routes>
          

        </div>
    
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
