import React from 'react';
import { create } from 'react-test-renderer';

import BioList from './';
import { stubLoading } from '../../testUtils/randomMocks'

const DEFAULT_PROPS = {
  label: 'label',
  requestUrls: ['urls']
}

const createBioList = customProps => 
  create(<BioList {...{...DEFAULT_PROPS, ...customProps}} />);


describe('BioList', () => {
  describe('render', () => {
    it('renders correctly', () => {
      stubLoading()

      expect(createBioList().toJSON()).toMatchSnapshot();
    })
  })
})
