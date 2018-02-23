import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});

import Dashboard from '../components/dashboard/dashboard';

describe('Dashboard', () => {
  it('Tests Initial State', () => {
    let mountedDash = Enzyme.mount(<Dashboard />);
    expect(mountedDash.state('notes')).toEqual([]);
  });
});