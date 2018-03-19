import React from 'react';

class NoteUpdate extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.item ? this.props.item : {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.setParentState({
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
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}  
        />
        <input
          type='text'
          name='content'
          placeholder='Details'
          value={this.state.content}
          onChange={this.handleChange}  
        />
        <button type='submit'> Create Note </button>
      </form>
    );
  }
}

export default NoteUpdate;