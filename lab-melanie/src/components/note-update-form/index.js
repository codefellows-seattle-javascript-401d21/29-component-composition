import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
    };
    // ----- Bind Handlers ----- //
    let memberFunctions = Object.getOwnPropertyNames(NoteUpdateForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  // ----- Handlers ----- //
  handleSubmit(event) {
    event.preventDefault();

    this.props.update(this.state);
    this.handleEditing();
  }

  handleChange(event){
    let {name, value} = event.target;


    this.setState({
      completed: true,
      [name]: value,
    });
  }

  handleEditing() {
    this.props.getOrSetState.setState({editing: false});
  }

  componentWillMount() {
    this.setState({
      title: this.props.note.title,
      content: this.props.note.content,
      id: this.props.note.id,
    });
  }

  render() {
    return (
      <form className='update-form' onSubmit={this.handleSubmit}>
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
        <button type='submit'>Update Note</button>
        <button type='button' onClick={this.handleEditing}>Cancel</button>
      </form>
    );
  }
}

export default NoteUpdateForm;
