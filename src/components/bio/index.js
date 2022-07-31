import React from 'react';
import PropTypes from 'prop-types';
import './bio.scss';

const Bio = ({
  height,
  weight,
  hairColor,
  birthYear
}) => <p className='bio'>{height}cm | {weight}kg | {birthYear} | {hairColor}</p>

Bio.propTypes = {
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  birth_year: PropTypes.string
}

export default Bio;