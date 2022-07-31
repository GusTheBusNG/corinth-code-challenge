import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../bio';
import BioList from '../bioList';

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

  return (
    <div>
      <h1>Hello there {name}</h1>
      <Bio {...{name, height, weight, hairColor, birthYear}} />
      <BioList label='Species' requestUrls={species} />
      <BioList label='Starships' requestUrls={starships} />
      <BioList label='Films' requestUrls={films} field='title' />
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