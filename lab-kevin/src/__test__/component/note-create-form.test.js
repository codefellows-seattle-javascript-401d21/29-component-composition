'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()});

import {Note_create_form} from '../../components/note/index.js';
import {Dashboard} from '../../components/dashboard/index.js';

describe('Note_create_form: Test ', function () {

    this.data = {
      eventTitle: {target: {name: 'title', value: 'Hello'}},
      eventContent: {target:{name: 'content', value: 'How are you today?'}},
      eventSubmit: {preventDefault: (e)=>{}},
    }

     //this is weird  because my code is weird on my dasboard
    this.dashboard = Enzyme.shallow(<Dashboard match={{path: '/dashboard'}}/>, { router: {isActive: (a, b) => true } });
     //this should work for you
     //***  let dashboard = Enzyme.mount(<Dashboard /> ***//

    this.note_create_form = Enzyme.mount(<Note_create_form dashboard={this.dashboard.instance().state_getter_setter()}/>);
  
    beforeAll(() => {
      //send fake title change events
      return this.note_create_form.instance().handleChange(this.data.eventTitle);
    })

    beforeAll(() => {
      //send fake content change events
      return this.note_create_form.instance().handleChange(this.data.eventContent);
    })

    describe('Note_create_form: change test', () => {

    it('Should have a state with a title and content', () => {

      console.log('after change note_create_form', this.note_create_form.state())
      expect(this.note_create_form.state('title')).toEqual('Hello');
      expect(this.note_create_form.state('content')).toEqual('How are you today?');
    });
  });

    describe('Note_create_form: create test', () => {

    beforeAll(() => {
      this.note_create_form.instance().handleSubmit(this.data.eventSubmit);
    });

    it('Should have a note create state with empty title and content', () => {
      console.log('after submit note_create_form', this.note_create_form.state())
      expect(this.note_create_form.state('title')).toEqual('');
      expect(this.note_create_form.state('content')).toEqual('');
    });

    it('Should have a note in dashboard in an array with content and title', () => {
      console.log('dashboard', this.dashboard.state('notes'));
      expect(this.dashboard.state('notes')[0].title).toEqual('Hello');
      expect(this.dashboard.state('notes')[0].content).toEqual('How are you today?');
    });
    
    })
  });