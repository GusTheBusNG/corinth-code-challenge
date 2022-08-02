import React from 'react';
import { create } from 'react-test-renderer';

import Films from './';

const createFilms = () => create(<Films films={['1']} />);

describe('Films', () => {
  describe('render', () => {
    it('renders correctly', () => {
      expect(createFilms().toJSON()).toMatchSnapshot();
    })
  })
})
