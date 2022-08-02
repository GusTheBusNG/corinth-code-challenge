import React from 'react';
import { create } from 'react-test-renderer';

import Error from './';
import { stubError } from '../../testUtils/randomMocks'

const createError = () => create(<Error error='error' />);

describe('Error', () => {
  describe('render', () => {
    it('renders correctly', async () => {
      stubError()

      expect(createError().toJSON()).toMatchSnapshot();
    })
  })
})
