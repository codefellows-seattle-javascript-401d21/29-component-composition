import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteForm from '../components/note-create-form/index';


describe('NoteForm component', () => {

  test('initial state', () => {
    let mountedNoteForm = Enzyme.mount(<NoteForm />);

    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });

/*  test('should set state', () => {
    const wrapper = mount(
      <NoteForm />
    ));
  });
*/
});
