import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteItem from '../components/note-item/index';
import Dashboard from '../components/dashboard/index';


describe('NoteItem component', () => {

  test('initial state', () => {
    const mockNote = {title: 'test title', content: 'test content', id: 1};
    const dashboard = mount(<Dashboard />);
    dashboard.setState({notes: [mockNote]});
    const noteitem = mount(<NoteItem key={mockNote.id} note={mockNote} handleRemoveNote={dashboard.instance().handleRemoveNote} />);

    expect(noteitem.state('editing')).toEqual(false);
    expect(dashboard.state('notes')).toEqual([mockNote]);
  });

  test('handleClick: should remove a note from notes in dashboard state when delete button is clicked', () => {
    const mockNote = {title: 'test title1', content: 'test content1', id: 2};
    const dashboard = mount(<Dashboard />);
    dashboard.setState({notes: [mockNote]});
    const noteitem = mount(<NoteItem key={mockNote.id} note={mockNote} handleRemoveNote={dashboard.instance().handleRemoveNote} />);

    expect(dashboard.state('notes')).toEqual([mockNote]);

    noteitem.find('.delete').simulate('click');

    expect(dashboard.state().notes).toEqual([]);
  });

});
