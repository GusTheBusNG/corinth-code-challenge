import React from 'react';
import PropTypes from 'prop-types';
import './error.scss';
import { getErrorQuote } from '../../utils/randomPhrases';

const Error = ({ error }) =>
  error && <p className='error'>{getErrorQuote()}</p>

Error.propTypes = {
  Error: PropTypes.object
}

Error.defaultProps = {
  Error: {}
}

export default Error;