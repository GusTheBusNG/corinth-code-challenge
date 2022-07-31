import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const BioList = ({ label, requestUrls, field }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    Promise.all(requestUrls.map(requestUrl => axios.get(requestUrl)))
      .then(request => setNames(request.map(({ data }) => data[field])))
      .catch(error => console.log(error))
  }, [requestUrls, field])

  return <h5>{label}: {names.join(', ')}</h5>
}

BioList.propTypes = {
  label: PropTypes.string,
  requestUrls: PropTypes.arrayOf(PropTypes.string)
}

BioList.defaultProps = {
  requestUrls: [],
  field: 'name'
}

export default BioList;