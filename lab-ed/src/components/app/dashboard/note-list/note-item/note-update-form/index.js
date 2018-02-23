import React from 'react'

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props)
    
        this.state = this.props.handleGetOrSet.state ? this.props.handleGetOrSet.state : {}
        this.handleCancel = this.handleCancel.bind(this)
      }
    
      handleCancel() {
        this.props.handleGetOrSet.setState({doubleClick: false})
      }

      handleChange(event) {
        let {name, value} = event.target
        this.setState( {
          [name]: value,
        })
      }
    
      render() {
        return(
          <form>
            <h2>Update</h2>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}/>
            <input
              type='text'
              name='content'
              value={this.state.content}
              onChange={this.handleChange}/>
            <br></br>
            <button className='cancelButton' onClick={this.handleCancel}>Cancel edit</button>
          </form>
        )
      }
    }
    
export default NoteUpdateForm
