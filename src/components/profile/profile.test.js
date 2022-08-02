import React from 'react';
import { create } from 'react-test-renderer';

import Profile from './';
import Films from '../films';
import { stubLoading } from '../../testUtils/randomMocks'
import { character } from '../../testUtils/exampleCharacter';

const createProfile = customProps => 
  create(<Profile {...{...character, ...customProps}} />);


describe('Profile', () => {
  describe('render', () => {
    it('renders correctly', async () => {
      stubLoading()
      const profile = createProfile();
      const films = await profile.root.findByType(Films);

      expect(profile.toJSON()).toMatchSnapshot();
      expect(films.props.films).toEqual(['1']);
    })
  })
})
