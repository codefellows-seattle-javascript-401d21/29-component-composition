import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../components/note-create-form/index';
import Dashboard from '../components/dashboard/index';

describe('NoteCreateForm', () => {
  it('properly sets the initial state', () => {
    let mountedForm = Enzyme.mount(<NoteCreateForm />);
    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });

  it('correctly handles a note creation submission', () => {
    let shallowForm = Enzyme.shallow(<NoteCreateForm />);
    shallowForm.find('.title-input').simulate('change', {
      target: {
        name: 'title',
        value: 'test',
      },
    });
    expect(shallowForm.state('title')).toEqual('test');
  });
});
