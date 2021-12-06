import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PetList from './components/PetList';

import UsersRoute from './routes/UsersRoute';


// https://blog.logrocket.com/react-router-v6/

function App() {
  return (
    <div className="App"> 
        <Router>
          <Routes>
            <Route path="/" element={<UsersRoute/> } />
            <Route path="/" element={<PetList/> } />
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

