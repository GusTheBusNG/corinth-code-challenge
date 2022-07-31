import React from 'react';
import PropTypes from 'prop-types';
import BioList from '../bioList';

const Bio = ({
  height,
  weight,
  hairColor,
  birthYear
}) => (
  <div>
    <h5>Height: {height}cm</h5>
    <h5>Weight: {weight}kg</h5>
    <h5>Hair Color: {hairColor}</h5>
    <h5>Birth Year: {birthYear}</h5>
  </div>
);

Bio.propTypes = {
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  birth_year: PropTypes.string
}

export default Bio;