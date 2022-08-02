import React from 'react';
import PropTypes from 'prop-types';
import './infoPill.scss';

import { imageUrl } from '../../utils/cloudinary';

const InfoPill = ({ icon, children }) => (
  <div className='info-pill'>
    <img src={imageUrl(icon)} className='icon' alt={icon} />
    <p className='content'>{children}</p>
  </div>
)

InfoPill.propTypes = {
  icon: PropTypes.string,
}

export default InfoPill