import React from 'react';
import { renderIf } from '../../lib/utils';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);
    if (this.props.builder) this.state = {...this.props.builder.state}
    else this.state = {
      title: '',
      content: '',
    };
    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //--------------
  // Handlers
  //--------------
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.builder) this.props.builder.setState({...this.state});
    if (this.props.builder) this.props.builder.setState({ editing: false });
    this.props.submit(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.builder.setState({editing: false});
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }


  //--------------
  // Hooks
  //--------------
  render () {
    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='textarea'
          name='content'
          cols='50'
          rows='10'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        {renderIf(!this.state.id, <button type='submit'>Create Note</button>)}
        {renderIf(this.state.id, <button type='submit'>Update Note</button>)}
        {renderIf(this.state.id, <button onClick={this.handleCancel}>Cancel</button>)}
      </form>
    );
  }
}


export default NoteForm;