import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      title: '',
    };
    //Binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //functions
  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]:value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    //clear form for next note
    this.setState({
      content: '',
      title: '',
    });
  }

  render(){
    return (
      <form className='add-note' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='enter title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='content'
          placeholder='enter content'
          value={this.state.contents}
          onChange={this.handleChange}
        />

        <button type='submit'> Create Note </button>
      </form>
    );
  }
}

export default NoteCreateForm;
