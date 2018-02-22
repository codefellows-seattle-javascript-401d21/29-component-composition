import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      content : '',
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleUpdateNote(this.state);
  }

  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name]: value,
    });
  }

//   componentWillMount() {
//     this.setState({
//       title: this.props.note.title,
//       content: this.props.note.content,
//       id: this.props.note.id,
//       editing: this.props.editing,
//     });

//   }

  render(){
    return(
      <form className='note-update-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}  
        />
        <input
          className='content-update-input'
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
}
export default NoteUpdateForm;