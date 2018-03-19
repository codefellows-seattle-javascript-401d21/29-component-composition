
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import Dashboard from '../components/dashboard/dashboard';
import NoteCreateForm from '../components/dashboard/dashboard';

describe('Dashboard', () => {
  test('Testing initial state', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});