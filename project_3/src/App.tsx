import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import UsersList from './components/UsersList';
import User from "./models/User";
import UsersRoute from './routes/UsersRoute';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<UsersRoute />} /> 
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;


