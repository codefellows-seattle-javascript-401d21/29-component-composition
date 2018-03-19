import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteForm from '../components/note/note-form/note-form';

describe('NoteForm', () => {
  test('Testing initial state', () => {
    let mountedNoteForm = Enzyme.mount(<NoteForm />);
    expect(mountedNoteForm.state('completed')).toEqual(false);
    expect(mountedNoteForm.state('content')).toEqual('');
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});