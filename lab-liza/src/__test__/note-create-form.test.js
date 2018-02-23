import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../component/note-create-form/index.js';

describe('Note Create From', () => {
  test('Testing initial state', () => {
    let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);

    expect(mountedNoteCreateForm.state('title')).toEqual('');
    expect(mountedNoteCreateForm.state('completed')).toEqual(false);
    expect(mountedNoteCreateForm.state('content')).toEqual('');
  });
});

