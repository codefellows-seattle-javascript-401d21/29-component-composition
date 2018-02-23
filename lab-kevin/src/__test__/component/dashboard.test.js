'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new Adapter()});

import Dashboard from '../../components/dashboard/index.js';

describe('Dashboard: Test initial State', () => {
  it('Should have an initial state with an empty notes array', () => {
    let dashboard = Enzyme.shallow(<Dashboard match={{path: '/dashboard'}}/>, { router: {isActive: (a, b) => true } });
    expect(dashboard.state('notes')).toEqual([]);
  })
});