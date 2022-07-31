import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import './search.scss';

const Search = ({ setCharacter }) => {
  const [query, setQuery] = useState('')
  const [selectionIndex, setSelectionIndex] = useState(0)
  const [{ loading, error, data }, _refetch, manualCancel] = useAxios({
    url: 'https://swapi.dev/api/people/',
    params: { search: query }
  });
  const gotResults = !loading && !error && data && data.results;
    
  const searchFor = newQuery => {
    manualCancel()
    setQuery(newQuery)
  }

  const selectCharacter = (index = selectionIndex) =>
    gotResults && setCharacter(data.results[index])

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13 && selectionIndex > -1 && selectionIndex < data.results.length) {
      // User hit enter
      selectCharacter()
    } else if (keyCode === 38 && selectionIndex > 0) {
      // User hit the up arrow key
      setSelectionIndex(index => index - 1)
    } else if (keyCode === 40 && selectionIndex < data.results.length - 1) {
      // User hit the down arrow key
      setSelectionIndex(index => index + 1)
    }
  }

  return (
    <div>
      <input
        type='text'
        onChange={({ target: { value }}) => searchFor(value)}
        onKeyDown={handleKeyDown}
        placeholder="I'm looking for..."
      />
      <div>
        {loading && <p>Inputting data into the navicomputer...</p>}
        {error && <p>Our hyperdrive is down! Try to bypass the compressor! (Try again)</p>}
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

export default Search