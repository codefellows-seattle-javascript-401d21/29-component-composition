import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import NoteForm from '../component/note-form/note-form';

describe('NoteForm', () => {
  test('Testing initial state', () => {
    let mountedNoteForm = Enzyme.mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});