import React from 'react';

class NoteUpdate extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.handleGetOrSet.state ? this.props.handleGetOrSet.state : {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({editing: false});
    this.props.handleGetOrSet.setState(this.state);
    this.props.handleGetOrSet.setState({editing: false});
    this.props.submitEdit(this.state);
    // console.log(event.target);
  }

  handleCancel() {
    this.setState({editing: false});
    this.props.handleGetOrSet.setState({editing: false});
  }

  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    return(
      <form className='note-update-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Updated title'
          value={this.state.title}
          onChange={this.handleChange}  
        />
        <input
          type='text'
          name='content'
          placeholder='Updated Content'
          value={this.state.content}
          onChange={this.handleChange}  
        />
        <button name='update' type='submit'> Update Note </button>
        <button name='cancel' onClick={this.handleCancel}> Cancel </button>
        {/* {console.log(this.state)} */}
      </form>
    );
  }
}

export default NoteUpdate;