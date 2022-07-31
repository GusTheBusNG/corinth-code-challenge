import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Error from '../error';
import InfoPill from '../infoPill';
import { getLoadingQuote } from '../../utils/randomPhrases';

const BioList = ({ label, requestUrls, field }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [names, setNames] = useState([]);

  useEffect(() => {
    setLoading(true);
    Promise.all(requestUrls.map(requestUrl => axios.get(requestUrl)))
      .then(request => setNames(request.map(({ data }) => data[field])))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [requestUrls, field])

  if (error) return <Error error={error} />
  
  const content = loading ? getLoadingQuote() : names.join(', ')
  return <InfoPill icon={label}>{content}</InfoPill>
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