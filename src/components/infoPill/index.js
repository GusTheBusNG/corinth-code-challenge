import React from 'react';
import PropTypes from 'prop-types';
import './infoPill.scss';

import { Image } from 'cloudinary-react';

const InfoPill = ({ icon, children }) => (
  <div className='info-pill'>
    <Image publicId={`LifeWay-star-wars/${icon}`} className='icon' />
    <p className='content'>{children}</p>
  </div>
)

InfoPill.propTypes = {
  icon: PropTypes.string,
}

export default InfoPill