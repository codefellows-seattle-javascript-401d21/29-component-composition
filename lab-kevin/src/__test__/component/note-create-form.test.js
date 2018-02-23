'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()});

import Note_create_form from '../../components/note-create-form/index.js';

describe('Note_create_form: Test initial State', () => {
  it('Should have an initial state with an empty title', () => {
    let note_create_form = Enzyme.mount(<Note_create_form />);
    expect(note_create_form.state('title')).toEqual('');
  })
});