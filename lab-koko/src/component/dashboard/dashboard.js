import React from 'react';
import ExpenseForm from '../expense/expense-form/expense-form';
import ExpenseList from '../expense/expense-list/expense-list';
import { renderIf } from '../../lib/utils';
import Modal from '../modal/modal';

class Dashboard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      expenses: [],
      budget: 444,
      showError: false,
    };
    this.getOrSetState = this.getOrSetState.bind(this)
  }
  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }
  render() { 
    let totalSpend = this.state.expenses.reduce((a, b) => a + parseInt(b.price), 0)
    let remainingBudget = this.state.budget - totalSpend;

    return (
      <div className="main-content">
        <h1>Dashboard</h1>
        <section className="main-data">
          <p>Budget: ${this.state.budget}</p>
          <p>Total Spent: ${totalSpend}</p>
          <p>Ramaining Balance: ${remainingBudget}</p>
        </section>
        <ExpenseForm dashboard={this.getOrSetState()}/>
        <ExpenseList expenses={this.state.expenses}/>

        {renderIf(remainingBudget <= 0 && !this.state.showError,
          <Modal close={() => this.setState({showError: !this.state.showError})}>
            <section>
              <h1>SPENT ALL THE MONEY!!</h1>
            </section>
          </Modal>
        )}
      </div>
    );
  }
}
export default Dashboard;
