import React from 'react';
import './App.css';
import PetList from './components/PetList';

import UsersRoute from './routes/UsersRoute';

function App() {
  return (
    <div className="App"> 
    <UsersRoute/>     
    <PetList/>
    </div>
  );
}

export default App;