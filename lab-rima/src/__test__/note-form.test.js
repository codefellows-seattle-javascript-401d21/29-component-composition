import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteForm from '../components/note-create-form/index';
import Dashboard from '../components/dashboard/index';


describe('NoteForm component', () => {

  test('initial state', () => {
    let mountedNoteForm = mount(<NoteForm />);

    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });

  test('handleChange: should change state when input value changes', () => {
    const form = mount(<NoteForm />);
    const inputTitle = form.find('.title');
    const inputContent = form.find('.content');
    inputTitle.instance().value = 'Test title';
    inputTitle.simulate('change');
    inputContent.instance().value = 'Test content';
    inputContent.simulate('change');

    expect(form.state().title).toEqual('Test title');
    expect(form.state().content).toEqual('Test content');
  });

  test('handleSubmit: should save a new note in notes in dashboard state when save button is clicked', () => {
    const dashboard = mount(<Dashboard />);
    const form = mount(<NoteForm handleAddNote={dashboard.instance().handleAddNote}/>);
    const inputTitle = form.find('.title');
    const inputContent = form.find('.content');
    inputTitle.instance().value = 'Test title2';
    inputTitle.simulate('change');
    inputContent.instance().value = 'Test content2';
    inputContent.simulate('change');
    form.simulate('submit');

    expect(dashboard.state().notes[0].title).toEqual('Test title2');
    expect(dashboard.state().notes[0].content).toEqual('Test content2');
  });

});
