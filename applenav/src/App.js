import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SubNav from './components/SubNav/SubNav';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <SubNav />
      </header>
    </div>
  );
}

export default App;
