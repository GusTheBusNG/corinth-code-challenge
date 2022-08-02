import React from 'react';
import PropTypes from 'prop-types';
import './films.scss';

import { imageUrl } from '../../utils/cloudinary';

const Films = ({ films }) => (
  <div className='films'>
    {
      films.map(film => (
        <img
          className='film-poster'
          src={imageUrl(`movies/${film}`)}
          key={film}
          alt='film'
        /> 
      ))
    }
  </div>
);

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string)
}

export default Films;
