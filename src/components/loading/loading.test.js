import React from 'react';
import { create } from 'react-test-renderer';

import Loading from './'
import { stubLoading } from '../../testUtils/randomMocks'

const createLoading = customProps => 
  create(<Loading {...customProps} />);

describe('Loading', () => {
  describe('render', () => {
    it('renders correctly', () => {
      stubLoading();

      expect(createLoading().toJSON()).toMatchSnapshot();
    })

    it('renders correctly when not loading', async () => {
      expect(createLoading({ loading: false }).toJSON()).toMatchSnapshot();
    })
  })
})
