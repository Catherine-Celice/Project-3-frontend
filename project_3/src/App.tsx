import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';
import PetList from './components/PetList';
import UsersRoute from './routes/UsersRoute';
import CreateYourUserProfile from './components/CreateYourUserProfile';
import UsersList from './components/UsersList';
import DesktopNav from './components/DesktopNav';

function App() {
  return (
    <div className="App"> 
    <Router>
      {/* <DesktopNav/> */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/viewpets" element={<PetList/>}/>
        <Route path="/myprofile" element={<UsersList/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;