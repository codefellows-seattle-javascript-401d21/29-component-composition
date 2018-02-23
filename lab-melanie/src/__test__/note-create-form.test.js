import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import NoteCreateForm from '../components/note-create-form/index';
import Dashboard from '../components/dashboard/index';

describe('Note-Create-Form', () => {
  it('Tests Initial State', () => {
    let mountedNote = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNote.state('content')).toEqual('');
  });
});
describe('Change handler', () => {
  it('should change the content of the note', () => {
    let wrapper = Enzyme.shallow(<NoteCreateForm />);

    wrapper.find('.content').simulate('change', {
      target: {
        name: 'content',
        value: 'new content',
      },
    });
    expect(wrapper.state('content')).toEqual('new content');
  });
});
describe('Submit handler', () => {
  it('should add a note to the dashboard state.notes array', () => {
    let wrapperNote = Enzyme.shallow(<NoteCreateForm/>);

    wrapperNote.find('.content').simulate('change', {
      target: {
        name: 'content',
        value: 'new content',
      },
    });
    wrapperNote.find('.create-button').simulate('submit');
    expect(wrapperNote.state('content')).toEqual('new content');

  });
});
