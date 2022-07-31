import React, { useState } from 'react';
import './App.scss';
import Search from './components/search';
import Profile from './components/profile';

import { CloudinaryContext, Image } from 'cloudinary-react';

const App = () => {
  const [character, setCharacter] = useState({})
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

  return (
    <CloudinaryContext cloudName={cloudName} secure={true}>
      <div className='content'>
        <div className='heading'>
          <Image publicId='LifeWay-star-wars/logo' className='sw-logo' />
          <Search setCharacter={setCharacter} />
        </div>
        <Profile {...character} />
      </div>
    </CloudinaryContext>
  )
}

export default App;
