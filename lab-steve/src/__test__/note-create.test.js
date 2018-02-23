import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import NoteCreateForm from '../components/note-create/index';

describe('Dashboard', () => {
  test('Testing starting state', () => {
    let mountedDashboard = Enzyme.mount(<NoteCreateForm />);
    expect(mountedDashboard.state('title')).toEqual('');
    expect(mountedDashboard.state('content')).toEqual('');
  });
});
