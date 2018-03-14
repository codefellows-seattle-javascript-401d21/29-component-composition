import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import ExpenseCreateForm from '../components/expense/expense-create-form/expense-create-form';

describe('Dashboard', () => {
  test('Testing starting state', () => {
    let mountedDashboard = Enzyme.mount(<ExpenseCreateForm />);
    expect(mountedDashboard.state('name')).toEqual('');
    expect(mountedDashboard.state('price')).toEqual(0);
  });
});