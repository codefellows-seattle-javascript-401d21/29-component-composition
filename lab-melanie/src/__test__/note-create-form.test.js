import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import NoteCreateForm from '../components/note-create-form/index';
describe('Dashboard', () => {
  it('Tests Initial State', () => {
    let mountedNote = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNote.state('content')).toEqual('');
  });
});
