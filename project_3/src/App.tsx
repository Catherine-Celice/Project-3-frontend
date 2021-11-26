import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import UsersList from './components/UsersList';
import User from "./models/User";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<UsersList users={[]} />} />   {/* CAC: I added the users={[]} part
         because I had "exact" with the path (I had copied it from somewhee), but VSCode did not like it, 
         so I removed that word, which made VSCode not like <UsersList>.  When I 
         did a QuickFix on that error, VSCode added the users{[]} part. */}
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;


