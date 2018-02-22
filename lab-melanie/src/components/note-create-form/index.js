import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: '',
      title: '',
    };

    // ----- Bind Handlers ----- //
    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  // ----- Handlers ----- //
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNote(this.state);

    this.setState({
      editing: false,
      completed: false,
      content: '',
      title: '',
    });
  }

  handleChange(event){
    let {name, value} = event.target;


    this.setState({
      editing: true,
      completed: true,
      [name]: value,
    });
  }

  render() {
    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <input
            className='content'
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type='submit'>Add Note</button>
      </form>
    );
  }
}
export default NoteCreateForm;
