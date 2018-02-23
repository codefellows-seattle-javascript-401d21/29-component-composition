import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import NoteItem from '../components/note-item/index';
import Dashboard from '../components/dashboard/index';

describe('Note Item', function() {
  describe('Remove note', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);
    it('should remove note from dashboard', () => {

      console.log(mountedDashboard);
    });
  });
});
