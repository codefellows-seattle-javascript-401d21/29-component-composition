import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content ? this.props.content : '',
      title: this.props.title ? this.props.title : ''
    };
    let memberFunctions = Object.getOwnPropertyNames(NoteUpdateForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  handleSubmit(event){
    event.preventDefault();

    this.props.setState({
      content: this.state.content,
      title: this.state.title
    });
  }

  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name]: value,
    })
  }

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
        <button type='submit'> update note </button>
      </form>
    )
  }
};

export default NoteUpdateForm;
