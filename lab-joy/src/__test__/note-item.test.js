'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteForm from '../component/note-item/note-item';
import NoteItem from '../component/note-item/note-item';
import Dashboard from '../component/dashboard/dashboard';

describe('NoteItem', () => {
  it('should delete a note', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);
    let mountedNoteItem = Enzyme.mount(<NoteItem />);
    let mountedNoteForm = Enzyme.mount(<NoteForm dashboard={mountedDashboard.instance().handleAddNote()} />);

    let data = {
      title: { target: { name: 'title', value: 'this is the title' } },
      content: { target: { name: 'content', value: 'this is the content' } },
    };

    beforeAll(() => {
      return mountedNoteForm.instance().handleChange(data.title);
    });

    beforeAll(() => {
      return mountedNoteForm.instance().handleChange(data.content);
    });

    expect(mountedNoteForm.state('title')).toBe('this is the title');


  });
});