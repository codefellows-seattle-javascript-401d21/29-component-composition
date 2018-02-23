import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      completed: false,
      content: '',
      title: ''
    };
    //----------------------------------------------------
    // Binding Handlers
    //----------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
    //----------------------------------------------------
  }
  //------------------------------------------------------
  // Member Function
  //------------------------------------------------------
  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddNote(this.state);
    // vinicio - clearing the form
    this.setState({
      completed: false,
      content: '',
      title: ''
    });
  }

  handleChange(event){
    let {name,value} = event.target;
    // vinicio - name will be the name of the input we are working with

    this.setState({
      [name]: value,
      created: true
    });
  }

  //------------------------------------------------------
  // Lifecycle hooks
  //------------------------------------------------------
  render(){
    return(
      <form className='note-create-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'> create note </button>
      </form>
    );
  }
};

export default NoteCreateForm;
