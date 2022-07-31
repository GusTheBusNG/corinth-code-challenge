import React from 'react';
import PropTypes from 'prop-types';

const Loading = (loading) => loading && <p>Inputting data into the navicomputer</p>

Loading.propTypes = {
  loading: PropTypes.bool
}

Loading.defaultProps = {
  loading: true
}

export default Loading;