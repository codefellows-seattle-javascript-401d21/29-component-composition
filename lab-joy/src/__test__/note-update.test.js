import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import NoteUpdate from '../component/note-update/note-update';

describe('NoteUpdate', () => {
  it('should change values in the note', () => {
    let mountedNoteUpdate = Enzyme.shallow(<NoteUpdate />);
    mountedNoteUpdate.find('.title').simulate('change', {
      target: {
        name: 'title',
        value: 'changed',
      },
    });
    expect(mountedNoteUpdate.state('title')).toEqual('changed');
  });
});