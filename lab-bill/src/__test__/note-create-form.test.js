import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../components/note-create-form/index';
import Dashboard from '../components/dashboard/index';


describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedForm = Enzyme.mount(<NoteCreateForm />);
    console.log(mountedForm.toString());
    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
  test('Testing initial state', () => {
    let shallowForm = Enzyme.shallow(<NoteCreateForm />);

    shallowForm.find('.title-input').simulate('change', {
      target: {
        name: 'title',
        value: 'test',
      },
    });
    expect(shallowForm.state('title')).toEqual('test');
  });
  test('Testing initial state', () => {
    let mountedDB = Enzyme.mount(<Dashboard />);
    let shallowForm2 = Enzyme.shallow(<NoteCreateForm />);

    shallowForm2.find('.note-form button').simulate('click');
    expect(mountedDB.state('notes').length).toEqual(1);
  });
});