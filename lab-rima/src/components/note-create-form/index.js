import React from 'react';


class NoteForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddNote(this.state);

    this.setState({
      title: '',
      content: '',
    });
  }

  render(){
    return(
      <form
        className="note-create-form"
        onSubmit={this.handleSubmit}
        id="note-create-form">

        <input
          className="title"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Enter a title"/>

        <input
          className="content"
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Enter a content"/>

        <button
          className="save"
          type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default NoteForm;
