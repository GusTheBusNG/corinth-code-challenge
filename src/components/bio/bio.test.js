import React from 'react';
import { create } from 'react-test-renderer';

import Bio from './';
import { character } from '../../testUtils/exampleCharacter';

const createBio = () => create(<Bio { ...character } />);


describe('Bio', () => {
  describe('render', () => {
    it('renders correctly', () => {
      expect(createBio().toJSON()).toMatchSnapshot();
    })
  })
})
