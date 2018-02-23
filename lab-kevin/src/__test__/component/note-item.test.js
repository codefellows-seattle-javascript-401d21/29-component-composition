'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()});

import {Note_create_form, Note_item} from '../../components/note/index.js';
import {Dashboard} from '../../components/dashboard/index.js';

describe('Note_item: Test ', function() {

  this.data = {
    eventTitle: {target: {name: 'title', value: 'Hello'}},
    eventUpdateTitle: {target: {name: 'title', value: 'Goodbye'}},
    eventContent: {target:{name: 'content', value: 'How are you today?'}},
    eventSubmit: {preventDefault: (e)=>{}},
  }

    //this is weird  because my code is weird on my dasboard
  this.dashboard = Enzyme.shallow(<Dashboard match={{path: '/dashboard'}}/>, { router: {isActive: (a, b) => true } });
    //this should work for you
    //***  let dashboard = Enzyme.mount(<Dashboard /> ***//

  this.note_create_form = Enzyme.mount(<Note_create_form dashboard={this.dashboard.instance().state_getter_setter()}/>);

  //this.Note_item = Enzyme.mount(<Note_item dashboard={this.dashboard.instance().state_getter_setter()}/>);

  beforeAll(() => {
    //send fake title change events
    return this.note_create_form.instance().handleChange(this.data.eventTitle);
  })

  beforeAll(() => {
    //send fake content change events
    return this.note_create_form.instance().handleChange(this.data.eventContent);
  })

  beforeAll(() => {
    this.eventDelete = {target: {value: this.note_create_form.state('id')}};
      return this.note_create_form.instance().handleSubmit(this.data.eventSubmit);
  });

 
  beforeAll(() => {
    this.created_note = this.dashboard.state('notes').slice()[0];
    this.notes_count = this.dashboard.state('notes').length;
    return this.Note_item = Enzyme.mount(<Note_item note={this.created_note} dashboard={this.dashboard.instance().state_getter_setter()}/>);
  });
    
    beforeAll(() => {
      return this.Note_item.instance().handleUpdate();
    });
   
    beforeAll(() => {
       return this.update_note_create_form = Enzyme.mount(<Note_create_form note={this.Note_item.props().note} dashboard={this.dashboard.instance().state_getter_setter()}/>);
    });

    beforeAll(() => {
      return this.update_note_create_form.instance().handleChange(this.data.eventUpdateTitle);
    });

    describe('Note_item: update Test ',  () => {

    beforeAll(() => {
       return this.update_note_create_form.instance().handleSubmit(this.data.eventSubmit);
    });

    it('Should have a note in dashboard in an array with a title that changed', () => {
      expect(this.dashboard.state('notes')[0].title).toEqual('Goodbye');
      expect(this.dashboard.state('notes')[0].content).toEqual('How are you today?');
      expect(this.dashboard.state('notes')[0].id).toEqual(this.created_note.id);
    });

  });

  describe('Note_item: Delete Test ',  () => {
    beforeAll(() => {
      return this.Note_item.instance().handleDeleteNote(this.eventDelete);
    });
      
    it('Should have a note create state with empty title and content', () => {
     // expect(this.created_note.title).toEqual('Hello');
      expect(this.dashboard.state('notes')[0]).toBeUndefined();
      expect(this.dashboard.state('notes').length).not.toEqual(this.notes_count);
    });

  });

});