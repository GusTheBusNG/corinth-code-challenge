import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import './search.scss';

import Loading from '../loading';
import Error from '../error';

const Search = ({ setCharacter }) => {
  const [query, setQuery] = useState('')
  const [selectionIndex, setSelectionIndex] = useState(0)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef(null)
  const [{ loading, error, data }, _refetch, manualCancel] = useAxios({
    url: 'https://swapi.dev/api/people/',
    params: { search: query }
  });
  const gotResults = !loading && !error && data && data.results;
    
  const searchFor = newQuery => {
    manualCancel()
    setQuery(newQuery)
  }

  const selectCharacter = (index = selectionIndex) => {
    if (!gotResults) return;

    const character = data.results[index]
    setQuery(character.name)
    setCharacter(character)
    setIsFocused(false)
  }

  const unfocusInput = () => {
    setIsFocused(false)
    searchRef.current.blur()
  }

  const handleKeyDown = ({ keyCode, target }) => {
    if (keyCode === 13 && selectionIndex > -1 && selectionIndex < data.results.length) {
      // User hit enter
      selectCharacter()
      unfocusInput()
    } else if (keyCode === 38 && selectionIndex > 0) {
      // User hit the up arrow key
      setSelectionIndex(index => index - 1)
    } else if (keyCode === 40 && selectionIndex < data.results.length - 1) {
      // User hit the down arrow key
      setSelectionIndex(index => index + 1)
    }
  }

  const handleClick = useCallback(
    ({ target }) => !searchRef.current.contains(target) && unfocusInput(),
  [])
  useEffect(() => {
    document.addEventListener('click', handleClick, true)
  }, [handleClick])

  return (
    <div className='search' ref={searchRef}>
      <input
        type='text'
        onChange={({ target: { value }}) => searchFor(value)}
        onKeyDown={handleKeyDown}
        placeholder="I'm looking for..."
        onFocus={() => setIsFocused(true)}
        value={query}
      />
      <div className={`auto-complete${isFocused ? ' active' : ''}`}>
        <Loading loading={loading} />
        <Error error={error} />
        {
          gotResults && data.results.map(({ name }, index) => (
            <div
              className={`selection${selectionIndex === index ? ' current' : ''}`}
              key={name}
              onClick={() => selectCharacter(index)}
              onMouseEnter={() => setSelectionIndex(index)}
            >
              <p>{name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

Search.propTypes = {
  setCharacter: PropTypes.func
}

export default Search