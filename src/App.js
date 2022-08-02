import React, { useState } from 'react';
import './App.scss';
import Search from './components/search';
import Profile from './components/profile';
import { imageUrl } from './utils/cloudinary';

const App = () => {
  const [character, setCharacter] = useState({})

  return (
    <div className='content'>
      <div className='heading'>
        <img src={imageUrl('logo')} className='sw-logo' alt='Star Wars Logo' />
        <Search setCharacter={setCharacter} />
      </div>
      <Profile {...character} />
    </div>
  )
}

export default App;
