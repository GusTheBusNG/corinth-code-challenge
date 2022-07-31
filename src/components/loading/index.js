import React from 'react';
import PropTypes from 'prop-types';
import './loading.scss';
import { getLoadingQuote } from '../../utils/randomPhrases';

const Loading = ({ loading }) =>
  loading && <p className='loading'>{getLoadingQuote()}</p>

Loading.propTypes = {
  loading: PropTypes.bool
}

Loading.defaultProps = {
  loading: true
}

export default Loading;