import React from 'react';
import PropTypes from 'prop-types';
import './profile.scss';

import Bio from '../bio';
import BioList from '../bioList';
import Films from '../films';

const Profile = ({
  name,
  height,
  mass: weight,
  hair_color: hairColor,
  birth_year: birthYear,
  species,
  starships,
  films
}) => {
  if (name === '') return;
  films = films.map(film => film[film.length - 2]);
  console.log(films)

  return (
    <div className='profile'>
      <h1>Hello there {name}</h1>
      <Bio {...{ name, height, weight, hairColor, birthYear }} />
      <BioList label='Species' requestUrls={species} />
      <BioList label='Starship' requestUrls={starships} />
      <Films films={films} />
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  birth_year: PropTypes.string,
  species: PropTypes.array,
  films: PropTypes.array,
  starships: PropTypes.array
}

Profile.defaultProps = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  birth_year: '',
  species: [],
  films: [],
  starships: []
}

export default Profile