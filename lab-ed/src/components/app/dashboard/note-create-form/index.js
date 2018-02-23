import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title :'',
      completed: false,
      content: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleAddNote(this.state)
    this.setState({
      title :'',
      completed: false,
      content: '',
    })
  }

  handleChange(event) {
    let {name, value} = event.target
    this.setState({
      [name]: value,
      created: true,
    })
  }

  render() {
    return( 
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Note title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='A penny for your thoughts'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br></br>
        <button type='submit'>Add note</button>
      </form>
    )
  }
}
export default NoteCreateForm
