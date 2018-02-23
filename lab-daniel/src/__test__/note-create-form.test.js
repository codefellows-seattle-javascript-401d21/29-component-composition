import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../components/note-form/note-form';

describe('Dashboard', () => {
  it('Tests Initial State', () => {
    let mountedDash = Enzyme.mount(<NoteForm />);
    expect(mountedDash.state('title')).toEqual('');
  });
});