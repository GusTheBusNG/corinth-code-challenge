import React, { useState } from 'react';
import './App.scss';
import Search from './components/search';
import Profile from './components/profile';

const App = () => {
  const [character, setCharacter] = useState({})

  return (
    <div>
      <Search setCharacter={setCharacter} />
      <Profile {...character} />
    </div>
  )
}

export default App;
