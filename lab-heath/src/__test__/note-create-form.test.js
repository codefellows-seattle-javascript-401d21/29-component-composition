import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../component/note-create-form/index';
import Dashboard from '../component/dashboard/index';


describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedForm = Enzyme.mount(<NoteCreateForm />);

    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
  test('Testing initial state', () => {
    let shallowForm = Enzyme.shallow(<NoteCreateForm />);

    let mock = {target : {title: 'test'}};
    shallowForm.find('.input').simulate('Change', mock);

    expect(shallowForm.state('title')).toEqual('test');
  });
});