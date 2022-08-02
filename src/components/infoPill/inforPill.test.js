import React from 'react';
import { create } from 'react-test-renderer';

import InfoPill from './';

const createInfoPill = () => 
  create(<InfoPill icon='lightsaber'>and the children too</InfoPill>);


describe('InfoPill', () => {
  describe('render', () => {
    it('renders correctly', () => {
      expect(createInfoPill().toJSON()).toMatchSnapshot();
    })
  })
})
