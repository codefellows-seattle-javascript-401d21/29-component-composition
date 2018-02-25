import React from 'react';


class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: this.props.noteItem.state.note.id,
      title: '',
      content: '',
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteUpdateForm.prototype);
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
    this.props.handleUpdateNote(this.state);

    this.props.noteItem.setState({editing: false});

    this.setState({
      id: this.props.noteItem.state.note.id,
      title: '',
      content: '',
    });
  }

  handleCancel(event){
    event.preventDefault();

    this.props.noteItem.setState({editing: false});

    this.setState({
      id: this.props.noteItem.state.note.id,
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
          placeholder={this.props.noteItem.state.note.title}/>

        <input
          className="content"
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder={this.props.noteItem.state.note.content}/>

        <button
          className="update"
          type="submit">
          Update
        </button>

        <button
          className="cancel"
          type="button"
          onClick={this.handleCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

export default NoteUpdateForm;
