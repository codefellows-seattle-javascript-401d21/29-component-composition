import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };


    // Binding Handlers
    Object.getOwnPropertyNames(NoteCreateForm.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  // Member Functions
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
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
        <button type='submit'>create note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
