import React from 'react';

class NoteUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
      
    let memberFunctions = Object.getOwnPropertyNames(NoteUpdate.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleUpdateNote(this.state);
    this.props.toggle();
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(e) {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='textarea'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'> Update Note </button>
        <button onClick={this.props.toggle}>Cancel</button>
      </form>
    );
  }
}

export default NoteUpdate;