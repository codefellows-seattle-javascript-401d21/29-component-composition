import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      content : '',
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNote(this.state);

    this.setState({
      title : '',
      content : '',
    });
  }

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }


  render() {
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}/>
        <input
          className='content-input'
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}/>
        <button
          type='submit'> create note </button>
      </form>
    );
  }
}

export default NoteCreateForm;
