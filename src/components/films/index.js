import React from 'react';
import PropTypes from 'prop-types';
import './films.scss';

import { Image } from 'cloudinary-react';

const Films = ({ films }) => (
  <div className='films'>
    {
      films.map(film => (
        <Image
          className='film-poster'
          publicId={`LifeWay-star-wars/movies/${film}`}
          key={film}
        /> 
      ))
    }
  </div>
);

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string)
}

export default Films;
