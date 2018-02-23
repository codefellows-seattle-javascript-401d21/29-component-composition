import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title ? this.props.title : '',
      content: this.props.content ? this.props.content : '',
    };
    let memberFunctions = Object.getOwnPropertyNames(NoteUpdateForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.setState({
      title: this.state.title,
      content: this.state.content,
    });
  }

  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
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
    );
  }
};

export default NoteUpdateForm;