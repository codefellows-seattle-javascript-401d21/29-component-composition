import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteUpdateForm from '../components/note-update-form/index';
import NoteItem from '../components/note-item/index';
import Dashboard from '../components/dashboard/index';


describe('NoteUpdateForm component', () => {

  test('initial state', () => {
    const mockNote = {title: 'test title', content: 'test content', id: 1};
    const dashboard = mount(<Dashboard />);
    dashboard.setState({notes: [mockNote]});
    const noteitem = mount(<NoteItem key={mockNote.id} note={mockNote} handleRemoveNote={dashboard.instance().handleRemoveNote} />);
    const noteupdateform = mount(<NoteUpdateForm noteItem={noteitem.instance().handleGetSetState()} handleUpdateNote={dashboard.instance().handleUpdateNote} />);

    expect(noteupdateform.state('id')).toEqual(1);
    expect(noteupdateform.state('title')).toEqual('');
    expect(noteupdateform.state('content')).toEqual('');
  });

  test('handleSubmit: should update and save the update data in notes in dashboard state when update button is clicked', () => {
    const mockNote = {title: 'test title1', content: 'test content1', id: 2};
    const updatedMockNote = {title: 'test updated title1', content: 'test updated content1', id: 2};
    const dashboard = mount(<Dashboard />);
    dashboard.setState({notes: [mockNote]});
    const noteitem = mount(<NoteItem key={mockNote.id} note={mockNote} handleRemoveNote={dashboard.instance().handleRemoveNote} />);
    const noteupdateform = mount(<NoteUpdateForm noteItem={noteitem.instance().handleGetSetState()} handleUpdateNote={dashboard.instance().handleUpdateNote} />);

    expect(dashboard.state('notes')).toEqual([mockNote]);

    noteupdateform.setState({title: updatedMockNote.title, content: updatedMockNote.content});
    noteupdateform.simulate('submit');

    expect(dashboard.state('notes')).toEqual([updatedMockNote]);
    expect(noteupdateform.state('id')).toEqual(2);
    expect(noteupdateform.state('title')).toEqual('');
    expect(noteupdateform.state('content')).toEqual('');
  });

});
