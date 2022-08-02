import React from 'react';
import { act, create } from 'react-test-renderer';

import App from './App'
import Profile from './components/profile';
import Search from './components/search';
import { stubLoading } from './testUtils/randomMocks'
import { character } from './testUtils/exampleCharacter';

const createApp = () => create(<App />)

describe('App', () => {
  describe('render', () => {
    it('renders correctly', () => {
      stubLoading()
      expect(createApp().toJSON()).toMatchSnapshot();
    })
  })

  describe('when a user selects a character', () => {
    it('renders correctly', async () => {
      stubLoading()
      const app = createApp();
      const profile = await app.root.findByType(Profile);
      const search = await app.root.findByType(Search);

      act(() => search.props.setCharacter(character));

      expect(app.toJSON()).toMatchSnapshot();
      expect(profile.props.name).toEqual(character.name);
    })
  })
})
