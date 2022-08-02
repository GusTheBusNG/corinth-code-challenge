import React from 'react';
import { act, create } from 'react-test-renderer';

import Search from './';
import { stubLoading, stubError } from '../../testUtils/randomMocks'
import useAxios from 'axios-hooks';
import { character } from '../../testUtils/exampleCharacter';

const setCharacter = jest.fn()
const manualCancel = jest.fn()
const character2 = {
  name: 'Obi-Wan Kenobi',
  height: '6',
  mass: 'something',
  hair_color: 'brown',
  birth_year: 'some time long ago',
  species: ['example url species'],
  starships: ['example url starships'],
  films: ['example url fil1s']
}
jest.mock('axios-hooks')

const createSearch = () => create(<Search setCharacter={setCharacter} />);
const mockAxiosForError = () => useAxios.mockReturnValue([{ error: 'error' }]);
const mockAxiosForLoading = () =>
  useAxios.mockReturnValue([{ loading: true }, jest.fn(), manualCancel]);
const mockAxiosForData = () =>
  useAxios.mockReturnValue([{ data: { results: [character, character2] }, loading: false }]);

describe('Search', () => {
  describe('render', () => {
    it('renders correctly', () => {
      mockAxiosForData()

      expect(createSearch().toJSON()).toMatchSnapshot();
    })
  })

  describe('render loading', () => {
    it('renders correctly', () => {
      stubLoading()
      mockAxiosForLoading()

      expect(createSearch().toJSON()).toMatchSnapshot();
    })
  })

  describe('render error', () => {
    it('renders correctly', () => {
      stubError()
      mockAxiosForError()

      expect(createSearch().toJSON()).toMatchSnapshot();
    })
  })

  describe('selects the input', () => {
    it('focuses the search', async () => {
      mockAxiosForData()
      const search = await createSearch();
      const input = await search.root.findByProps({ type: 'text' })
      const dropdown = await search.root.findByProps({ className: 'auto-complete' })

      act(() => input.props.onFocus())

      expect(dropdown.props.className).toEqual('auto-complete active')
    })
  })

  describe('inputting text', () => {
    it('uses the manual cancel to cancel the query', async () => {
      mockAxiosForLoading()
      const search = await createSearch();
      const input = await search.root.findByProps({ type: 'text' })

      act(() => input.props.onChange({ target: { value: 'test' } }))

      expect(manualCancel).toHaveBeenCalled()
      expect(input.props.value).toEqual('test')
    })
  })

  describe('selects an option', () => {
    it('uses arrow keys', async () => {
      mockAxiosForData()
      const search = await createSearch();
      const input = await search.root.findByProps({ type: 'text' })
      const firstCharacterSelection = await search.root.findByProps({ className: 'selection current' })
      const secondCharacterSelection = await search.root.findByProps({ className: 'selection' })

      act(() => input.props.onKeyDown({ keyCode: 40 })) // down

      expect(firstCharacterSelection.props.className).toEqual('selection')
      expect(secondCharacterSelection.props.className).toEqual('selection current')

      act(() => input.props.onKeyDown({ keyCode: 40 })) // down again shouldn't change anything

      expect(firstCharacterSelection.props.className).toEqual('selection')
      expect(secondCharacterSelection.props.className).toEqual('selection current')

      act(() => input.props.onKeyDown({ keyCode: 38 })) // up

      expect(firstCharacterSelection.props.className).toEqual('selection current')
      expect(secondCharacterSelection.props.className).toEqual('selection')

      act(() => input.props.onKeyDown({ keyCode: 38 })) // up again shouldn't change anything

      expect(firstCharacterSelection.props.className).toEqual('selection current')
      expect(secondCharacterSelection.props.className).toEqual('selection')
    })

    it('uses mouse', async () => {
      mockAxiosForData()
      const search = await createSearch();
      const firstCharacterSelection = await search.root.findByProps({ className: 'selection current' })
      const secondCharacterSelection = await search.root.findByProps({ className: 'selection' })

      act(() => secondCharacterSelection.props.onMouseEnter())

      expect(firstCharacterSelection.props.className).toEqual('selection')
      expect(secondCharacterSelection.props.className).toEqual('selection current')
    })

    it('uses click to select the character', async () => {
      mockAxiosForData()
      const search = await createSearch();
      const characterSelection = await search.root.findByProps({ className: 'selection current' })

      act(() => characterSelection.props.onClick())

      const input = await search.root.findByProps({ type: 'text' })

      expect(input.props.value).toEqual(character.name)
      expect(setCharacter).toHaveBeenCalledWith(character)
    })

    describe('when still loading', () => {
      it('uses enter to select', async () => {
        stubLoading()
        mockAxiosForLoading()
        const search = createSearch();
        const input = await search.root.findByProps({ type: 'text' })
  
        act(() => input.props.onKeyDown({ keyCode: 13 }))
  
        expect(input.props.value).not.toEqual(character.name)
        expect(setCharacter).not.toHaveBeenCalledWith(character)
      })
    })
  })
})
