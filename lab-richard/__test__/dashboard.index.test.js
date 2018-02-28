import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import Dashboard from '../src/components/dashboard/index';
import NoteCreateForm from '../src/components/note-create-form/index';

describe('Dashboard', () => {
  test('Testing initial state', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);

    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});

describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
    
    expect(mountedNoteCreateForm.state('title')).toEqual('');
    expect(mountedNoteCreateForm.state('content')).toEqual('');
  });
});