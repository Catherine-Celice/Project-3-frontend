import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import PetList from './components/PetList';
import UsersRoute from './routes/UsersRoute';
import CreateYourUserProfile from './components/CreateYourUserProfile';
import UsersList from './components/UsersList';
import DesktopNav from './components/DesktopNav';
import PetProfile from './components/PetProfile';
import Login from './components/Login';
import PetFavs from './components/PetFavs';


// https://blog.logrocket.com/react-router-v6/

function App() {
  return (
    <div className="App"> 

    <Router>
      {/* <DesktopNav/> */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="viewpets">
          <Route path="/viewpets" element={<PetList/>}/>
          <Route path=":petId" element={<PetProfile/>}/>
        </Route>
        <Route path="/myprofile" element={<UsersRoute/>}/>
        <Route path="/signup" element={<CreateYourUserProfile/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/myfavoritePets" element={<PetFavs/>}/>
      </Routes>
    </Router>

    </div>
  );
}

// function App() {
//   return (
//     <div className="App"> 
//     <UsersRoute/>     
//     <PetList/>
//     
//   );
// }

export default App;

